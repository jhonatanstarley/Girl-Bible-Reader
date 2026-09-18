/**
 * A versão antiga tentava "raspar" o HTML de wol.jw.org via proxies CORS
 * públicos (cors-anywhere/proxyscrape), que hoje estão fora do ar — por isso
 * o texto do dia nunca carregava. Em vez de depender de um proxy de
 * terceiros instável, montamos o link oficial e deixamos o usuário abrir a
 * página real: zero manutenção, zero CORS, sempre funciona.
 */
export function buildDailyTextUrl(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `https://wol.jw.org/pt/wol/h/r5/lp-t/${year}/${month}/${day}`;
}
