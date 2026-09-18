import { useCallback, useEffect, useRef, useState } from "react";
import type { YTPlayer } from "../types/youtube";

const IFRAME_ID = "lofi-player";

/**
 * Controla a música lofi de fundo (iframe do YouTube oculto, usado só como
 * fonte de áudio). Diferente da versão antiga — que tocava automaticamente e
 * dependia de "clique em qualquer lugar" para desmutar —, aqui o usuário liga
 * explicitamente pelo botão flutuante, o que é mais previsível e acessível.
 */
export function useLofiPlayer() {
  const playerRef = useRef<YTPlayer | null>(null);
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(50);

  useEffect(() => {
    if (window.YT?.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = initPlayer;

    function initPlayer() {
      playerRef.current = new window.YT!.Player(IFRAME_ID, {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.setVolume(volume);
            setReady(true);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.unMute();
      player.playVideo();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const setVolume = useCallback((value: number) => {
    setVolumeState(value);
    playerRef.current?.setVolume(value);
  }, []);

  return { iframeId: IFRAME_ID, ready, isPlaying, volume, toggle, setVolume };
}
