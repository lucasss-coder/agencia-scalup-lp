# Agência Escalup — Landing Page (Consultoria de Mídia Paga)

Site estático (HTML/CSS/JS puro, **sem etapa de build**).
Projeto próprio e independente — repositório GitHub, projeto no Cloudflare Pages
e domínio dedicados (a definir), sem relação com nenhum outro projeto/cliente.

## Estrutura

```
index.html      → a landing page (página inicial)
assets/         → logos e favicon
  logo-scalup-header.png       lockup horizontal (logo clara, p/ header sobre fundo escuro)
  logo-scalup-header-dark.png  lockup horizontal (logo escura, p/ header sobre fundo claro)
  logo-scalup-icon.png         só o símbolo
  logo-scalup.png              lockup vertical completo (com "AGÊNCIA")
  favicon-scalup.png           ícone da aba
```

Fontes: Google Fonts via CDN (Inter + JetBrains Mono).

## Setup (uma vez)

1. Criar um repositório **novo e próprio** no GitHub (público, sem README).
2. **GitHub Desktop** → File → Add Local Repository → esta pasta → **Publish branch**
   (apontando pro repositório novo).
3. **Cloudflare** → Workers & Pages → Create → Connect to Git → selecionar esse repo.
   Build settings em branco (é HTML puro).
4. Adicionar o domínio próprio no projeto do Cloudflare Pages.

## Como atualizar / publicar

1. As alterações no código já vêm **commitadas localmente** (branch `main`).
2. Abrir o **GitHub Desktop** → as mudanças aparecem → **Push origin**.
3. O Cloudflare Pages detecta o push e republica sozinho em < 1 min.

## Ainda precisa preencher (placeholders no `index.html`)

- Estatísticas reais (trechos com `[X]` e os `data-target` dos contadores)
- Logos de clientes no carrossel (`.logos` → hoje "Cliente 01…16")
- Case em destaque (resultado real)
- Respostas do FAQ / textos das seções
- Rodapé: CNPJ, endereço, e-mail, redes sociais, página de privacidade
- Formulário: hoje só simula o envio no navegador — plugar endpoint/CRM/webhook
  no bloco marcado com `// >>> BACKEND` dentro do `<script>`
