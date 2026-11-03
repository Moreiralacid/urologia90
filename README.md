# URO 90 — plataforma de reta final em Urologia

Arquivo único de estudo para a prova de Urologia. Feito para uma véspera de prova, mas reutilizável em qualquer revisão. Inclui o banco amplo de 28 tópicos e a trilha específica **AP2 2026.2** com 36 questões históricas.

**Entrega principal:** `index.html` (idêntico a `urologia90_plataforma.html`).  
**Pacote:** `urologia90_plataforma.zip` com `index.html`, este README e o relatório de validação.  
**Dependências:** nenhuma. Sem internet, sem instalação, sem servidor obrigatório.

---

## 1. Como abrir

1. Descompacte o ZIP (ou use a pasta atual).
2. Dê dois cliques em `index.html`.
3. O app abre no navegador. Todo o conteúdo, CSS e JavaScript estão dentro do arquivo.

Se o navegador bloquear a persistência em `file://`, abra com um servidor local simples:

```bash
cd urologia90
python3 -m http.server 8123
# depois acesse http://127.0.0.1:8123/index.html
```

O progresso fica no **LocalStorage** do navegador, com espelho em **IndexedDB**. Não há conta, servidor nem envio de dados. Se você limpar os dados do navegador, o progresso some — exporte o JSON antes.

---

## 2. O que está dentro

| Camada | Quantidade | Conteúdo |
|---|---:|---|
| Áreas | 8 | ONCO, INF, LIT, FUN, AND, TRA, PED, BAS |
| Tópicos | 28 | Cobertura declarada do programa de revisão |
| Aulas densas | 28 | Conceito, aplicação, retenção, pegadinhas e fonte |
| Questões | 96 | 60 amplas + 36 históricas AP2, com gabarito, comentário e fonte |
| Flashcards | 64 | 48 amplos + 16 AP2, com repetição espaçada |
| Regras micro | 18 | Alto retorno por minuto |
| Casos clínicos | 5 | Rubrica de 10 pontos e espelho de resposta |
| Materiais | 16 | Diretrizes e referências externas |
| Módulos AP2 | 4 | Neuro/urodinâmica, trauma, IST e urgências não traumáticas |
| Aulas AP2 | 4 | Aula densa por módulo + atualizações 2026 |
| Simulados | ilimitados | 40 itens de 5 alternativas sorteados, distribuição por área |
| Checklists | 2 | Véspera e dia da prova |

### Trilha AP2 2026.2

Além do banco amplo, o app tem uma trilha específica construída a partir do compilado **MEDCID Urologia AP2 2026.2** e do material complementar **Uro AP2 assuntos (39 páginas)**:

| Módulo | Tema | Questões históricas | V/F |
|---|---|---:|---:|
| M1 | Neurofisiologia miccional, urodinâmica e neurobexiga | 9 | 0 |
| M2 | Urgências urológicas traumáticas | 7 | 2 |
| M3 | Infecções sexualmente transmissíveis | 9 | 2 |
| M4 | Urgências urológicas não traumáticas | 11 | 0 |
| **Total** | — | **36** | **4** |

- Cada questão preserva a **prova de origem** (MED42 AP2 2024.2, MED48 AP2, AP3 2024, AP3 2022.2, prova final/discursiva).
- O **gabarito histórico é preservado**. Quando a prática 2026 diverge, aparece uma caixa de atualização separada (por exemplo, grau V de trauma renal, Tzanck no herpes e janela do priapismo).
- Os 4 itens V/F históricos continuam disponíveis no banco de questões, mas **não entram no simulado de 40 itens**, que exige 5 alternativas.
- A trilha é material de estudo, **não previsão da prova**: o programa 2026.2 não distribui oficialmente cada tema por avaliação.

### Modelo de avaliação adotado

- Prova objetiva: **40 itens**, 5 alternativas, **2,5 pontos** por acerto, total **100**.
- Corte: **50,0** e **pelo menos 1 acerto em cada área** (área zerada elimina).
- Meta de preparação: **90,0** (36/40).
- Caso clínico: **10 pontos**, corte **5,0**, meta **9,0**.
- Global: **110 pontos**, meta **99,0**.

Esse formato é o **modelo de referência do simulado**, não uma afirmação sobre a prova oficial. Se a sua prova tiver outra arquitetura, o conteúdo continua válido; ajuste a leitura dos números.

---

## 3. Roteiro para a véspera

O app monta o plano a partir de:

- data e hora da prova;
- horário de início;
- carga desejada (padrão: 6 h).

O plano **corta automaticamente às 23h45** e **30 minutos antes da prova**, mesmo que você peça mais carga. A tela avisa quando isso acontece. Dormir faz parte do método.

Sugestão de uso:

1. **Diagnóstico relâmpago** — 10 questões mistas, sem consulta.
2. **Simulado oficial** — 40 itens, cronômetro de 60 min.
3. **Auditoria** — leia os comentários e escreva a regra de ouro de cada erro.
4. **Aulas quentes** — oncologia, litíase, infecção e emergências.
5. **Trilha AP2** — aula do módulo, questões históricas e leitura da atualização 2026.
6. **Flashcards vencidos** — recordação ativa, não releitura.
7. **Caderno de erros** — refaça o que errou por último.
8. **Checklist da véspera** — documento, local, rota e sono.
9. **Dia da prova** — só revisão leve e logística.

O plano de um dia **não cobre o edital inteiro**. Ele prioriza o que rende mais pontos por hora. Os 28 tópicos continuam disponíveis em Aulas.

---

## 4. Como estudar dentro do app

### Aulas
Leia, marque como estudada e faça as questões do tópico. Cada aula tem:
- conceito e correlação clínica;
- aplicação prática;
- recordação ativa;
- erros comuns e pegadinhas;
- fonte técnica.

### AP2 2026.2
- Painel com **4 módulos**, progresso por aula e por questões.
- Cada aula traz fisiopatologia/conduta, regras de ouro, pegadinhas e **atualizações 2026**.
- As 36 questões históricas aparecem no banco geral com filtros por banco e módulo.
- O comentário mostra por que cada alternativa está certa ou errada; o gabarito antigo é preservado.
- Botão **Exportar CSV** gera a trilha AP2 com origem, gabarito, comentário e atualização 2026.

### Questões
- A alternativa é travada após responder.
- O comentário explica o gabarito e os distratores.
- Erro por último entra automaticamente no **Caderno de erros**.
- É possível refazer e registrar nova tentativa.

### Flashcards
- Clique no cartão ou pressione **Espaço** para revelar.
- Avalie: **Não lembrei** (+10 min), **Com esforço** (+1/+3/+7 dias) ou **Lembrei** (+1/+7/+14/+30 dias).
- Teclas **1/2/3** avaliam quando o cartão está revelado.
- Exportação TSV compatível com Anki.

### Simulado
- **Oficial:** 60 minutos contínuos; sem correção até finalizar.
- **Estudo:** permite pausa.
- Cartão-resposta, marcação para revisar e salvamento automático do rascunho.
- Ao finalizar, mostra nota, acertos por área, áreas zeradas e erros prioritários.
- Questões em branco contam como erro.

### Casos clínicos
- Escreva a resposta antes de abrir o espelho.
- Autoavalie com a rubrica (0–10).
- Exporte todos os casos em TXT.

### Pareto 90
- **Macro:** peso das áreas.
- **Meso:** 28 tópicos ordenados por retorno estimado.
- **Micro:** 18 regras de emergência.
- Quando existem tentativas, o ranking pessoal usa **peso da área × lacuna ÷ custo em horas**.
- Sem tentativas, o app usa prioridade pedagógica declarada e diz isso.

### Materiais & prova
Arquitetura da nota, cobertura por área, fontes externas e limites do que o app promete.

### Meu plano & backup
- Editar nome, data/hora da prova, início, carga e meta pessoal.
- Exportar JSON completo, plano CSV, questões CSV, flashcards TSV, erros CSV, casos TXT, materiais CSV, Pareto CSV e trilha AP2 CSV.
- Importar backup JSON com validação.
- Apagar todos os dados (irreversível).

---

## 5. Persistência e backup

- Chave LocalStorage: `URO90_STATE_V1`.
- Espelho IndexedDB: `URO90_DB`.
- O estado é salvo automaticamente após cada ação.
- **Backup completo:** Meu plano & backup → Backup completo (JSON).
- **Restauração:** Importar backup JSON. Arquivo inválido não altera nada.
- Não há sincronização entre dispositivos. Para levar o progresso, exporte/importe o JSON.

---

## 6. Estrutura do projeto

```text
urologia90/
├── index.html                 # entrega principal (autocontida)
├── urologia90_plataforma.html # cópia idêntica
├── urologia90_plataforma.zip  # pacote de entrega
├── README.md
├── VALIDACAO.md               # auditoria gerada
├── build.mjs                  # gera o HTML único e o ZIP
├── validate.mjs               # audita conteúdo, cobertura e pontuação
└── src/
    ├── shell.html
    ├── styles.css
    ├── config.js              # áreas, tópicos, regras, materiais, casos, checklists
    ├── lessons-a.js           # 14 aulas (BAS, INF, LIT, FUN)
    ├── lessons-b.js           # 14 aulas (ONCO, AND, TRA, PED)
    ├── questions-a.js         # 30 questões amplas
    ├── questions-b.js         # 30 questões amplas
    ├── flashcards.js          # 48 cartões amplos
    ├── ap2.js                 # 4 módulos AP2: aulas, regras, fontes e notas 2026
    ├── ap2-questions.js       # 36 questões históricas + 16 flashcards AP2
    ├── AP2_extraido.txt       # texto extraído do PDF, para rastreabilidade
    ├── AP2_novo_extraido.txt  # texto extraído do PDF complementar (39 páginas)
    ├── app-00-core.js         # estado, persistência, plano, pontuação
    ├── app-10-shell.js        # rotas, dashboard, plano
    ├── app-20-lessons-questions.js
    ├── app-25-ap2.js          # painel, aulas e progresso AP2
    ├── app-30-cards-sim.js
    ├── app-40-cases-errors-pareto-materials-config.js
    └── app-90-actions-init.js # eventos, exportações, timers, init
```

Para alterar conteúdo, edite `src/` e rode:

```bash
node validate.mjs
node build.mjs
node validate.mjs
```

O `validate.mjs` verifica:

- sintaxe dos 15 scripts;
- IDs únicos e referências entre área/tópico/aula/questão/flashcard;
- 28 tópicos com aula, questão e flashcard;
- 5 alternativas distintas nos itens amplos; 2 ou 5 nos históricos AP2, com gabarito válido e comentário;
- 36 questões AP2, 16 flashcards AP2, 4 módulos, 4 aulas e origem histórica preservada;
- rubricas somando 10;
- blueprint de 40 itens e pesos somando 100%;
- sorteio do simulado (40 itens únicos, todos de 5 alternativas, e distribuição por área);
- cenários de nota (100, 90, 87,5, 75 com área zerada, 50, 47,5, 0);
- plano com teto às 23h45 e 30 min de segurança antes da prova;
- arquivo único sem dependências externas.

---

## 7. Limites e honestidade

- **Não é a prova oficial**, banco da banca, material da disciplina ou substituto de avaliação médica.
- **Não prevê nota** e **não garante aprovação**. A meta de 90% é referência de preparação.
- As prioridades são **inferência pedagógica** baseada em diretrizes públicas e recorrência típica em avaliações de medicina. Estão marcadas `[VERIFICAR]`.
- Não foi auditado um corpus histórico fechado desta prova. O app não inventa estatísticas de incidência.
- As questões AP2 são **históricas** e preservam o gabarito original. Onde a prática mudou, há uma nota 2026 separada; isso não transforma o item antigo em previsão da próxima prova.
- Conteúdo autoral baseado em EAU, AUA, SBU, NICE, CDC, OMS, Campbell-Walsh-Wein, MSD Manual, PCDT-IST e materiais UEA/MEDCID.
- Confira sempre a versão vigente da diretriz e o material da sua disciplina.

**Em caso de dúvida clínica real, procure avaliação médica.**
