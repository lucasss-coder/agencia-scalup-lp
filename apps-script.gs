/**
 * Escalup — recebe os leads da landing page e joga numa aba do Google Sheets.
 *
 * COMO USAR
 * 1. Abra a sua planilha no Google Sheets.
 * 2. Extensões → Apps Script. Apague o que estiver lá e cole este arquivo inteiro.
 * 3. (Opcional) troque SHEET_NAME pelo nome exato da aba onde quer os leads.
 * 4. Implantar → Nova implantação → tipo "App da Web":
 *      - Executar como: Eu
 *      - Quem pode acessar: Qualquer pessoa
 *    Copie a URL que termina em /exec.
 * 5. Cole essa URL no index.html, na constante APPS_SCRIPT_URL (dentro do <script>).
 *
 * Teste rápido: abra a URL /exec no navegador — deve responder {"ok":true,"msg":"Escalup lead endpoint"}.
 */

var SHEET_NAME = 'Leads'; // nome da aba; se não existir, é criada

var HEADERS = [
  'Data/Hora', 'Faturamento', 'Investimento em mídia', 'Principal desafio',
  'Nome', 'WhatsApp', 'E-mail', 'Site/Instagram', 'Consentimento', 'Origem'
];

function doPost(e) {
  try {
    var p = (e && e.parameter) ? e.parameter : {};

    // honeypot anti-spam: se preenchido, ignora sem erro
    if (p.website_hp) {
      return _json({ ok: true, skipped: 'honeypot' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date(),
      p.faturamento || '',
      p.invest || '',
      p.dor || '',
      p.nome || '',
      p.whats || '',
      p.email || '',
      p.site || '',
      p.consent ? 'sim' : '',
      p.origem || (e && e.parameter && e.parameter._origin) || ''
    ]);

    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return _json({ ok: true, msg: 'Escalup lead endpoint' });
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
