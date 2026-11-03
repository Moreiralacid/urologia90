/* Aulas 15–28 — Oncologia, Andrologia, Trauma e Pediatria */
URO.lessons = URO.lessons || [];

URO.lessons.push({
  id: "aula-onc-15", topicId: "top-onc-15", area: "onc", minutes: 40,
  title: "Câncer de próstata: rastreamento e diagnóstico",
  sections: {
    concept: `
<h2>1. Rastreamento e suspeita</h2>
<p>O câncer de próstata é o tumor sólido mais comum no homem. O rastreamento usa <strong>PSA</strong> e <strong>toque retal</strong>, com decisão compartilhada, geralmente entre 55 e 69 anos (ou a partir de 45–50 em grupos de risco: história familiar, etnia negra, mutações BRCA). Não se recomenda rastrear rotineiramente acima de 70 anos ou com expectativa de vida &lt; 10–15 anos.</p>
<p>PSA elevado não é câncer: hiperplasia, prostatite, ejaculação, cateterismo e trauma elevam o PSA. Confirme com nova dosagem em condições adequadas. A <strong>densidade do PSA</strong> (PSA/volume) &gt; 0,15–0,20 ng/mL/g e a <strong>fração livre</strong> &lt; 10–15% aumentam a suspeita. O toque retal detecta nódulos, mas não substitui o PSA.</p>

<h2>2. RM multiparamétrica e biópsia</h2>
<p>A <strong>RM multiparamétrica</strong> é feita antes da biópsia para estratificar lesões pelo <strong>PI-RADS</strong> (1–5). PI-RADS 1–2 têm baixa probabilidade de câncer significativo; PI-RADS 3–5 justificam biópsia. A biópsia preferencial é <strong>dirigida às lesões + sistemática</strong>, por via transperineal (menor risco de sepse) ou transretal com profilaxia. A RM reduz biópsias desnecessárias, mas não substitui o exame anatomopatológico.</p>

<h2>3. Anatomopatológico</h2>
<p>O escore de Gleason soma os dois padrões mais frequentes (1–5 cada), gerando 6–10. A classificação ISUP agrupa: <strong>grau 1</strong> (Gleason 3+3=6), <strong>grau 2</strong> (3+4=7), <strong>grau 3</strong> (4+3=7), <strong>grau 4</strong> (8) e <strong>grau 5</strong> (9–10). O grau 1 é considerado de baixo risco; grau ≥ 2 é clinicamente significativo. Informar número de fragmentos positivos e porcentagem de envolvimento ajuda no planejamento.</p>
<div class="callout"><strong>Pérola:</strong> o PSA pode estar normal em câncer localizado. Toque suspeito ou RM alarmante justificam investigação mesmo com PSA limítrofe.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 60 anos, PSA 5,2 ng/mL, toque normal, próstata 45 g. Densidade 0,12; fração livre 18%. Conduta: repetir PSA, considerar RM multiparamétrica. Se PI-RADS 1–2 e PSA estável, pode-se seguir com vigilância; se PI-RADS 3–5, biópsia dirigida + sistemática.</p>
<p>Homem de 66 anos, PSA 12, toque com nódulo pétreo, RM PI-RADS 5. Conduta: biópsia dirigida; se adenocarcinoma, estadiamento e grupos de risco.</p>
<table><tr><th>Ferramenta</th><th>Papel</th><th>Limitação</th></tr>
<tr><td>PSA</td><td>Rastreio e monitorização</td><td>Específico, não diagnóstico</td></tr>
<tr><td>Toque retal</td><td>Nódulo, consistência</td><td>Baixa sensibilidade</td></tr>
<tr><td>RM multiparamétrica</td><td>Estratificar PI-RADS</td><td>Depende de experiência</td></tr>
<tr><td>Biópsia</td><td>Diagnóstico e Gleason</td><td>Pode subestimar tumor</td></tr></table>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>PSA + toque</strong> com decisão compartilhada; não é rastreio universal.</li>
<li><strong>Densidade &gt; 0,15–0,20</strong> e <strong>fração livre &lt; 10–15%</strong> aumentam suspeita.</li>
<li><strong>PI-RADS 3–5</strong> → biópsia dirigida + sistemática.</li>
<li><strong>ISUP 1</strong> = Gleason 6; <strong>ISUP 2</strong> = 3+4; <strong>ISUP 3</strong> = 4+3.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"PSA levanta a mão, RM aponta o alvo, biópsia dá o nome."</em></div>
<p><strong>Pegadinha:</strong> PSA normal não exclui câncer; toque anormal manda investigar.</p>`
  },
  pitfalls: [
    "Biopsiar todo PSA elevado sem repetir ou estratificar.",
    "Dizer que PSA normal exclui câncer de próstata.",
    "Confundir Gleason 6 com alto risco.",
    "Esquecer a decisão compartilhada e a expectativa de vida no rastreamento."
  ],
  source: "EAU Prostate Cancer Guidelines; AUA Early Detection; NCCN Prostate Cancer."
});

URO.lessons.push({
  id: "aula-onc-16", topicId: "top-onc-16", area: "onc", minutes: 40,
  title: "Câncer de próstata: estadiamento e tratamento",
  sections: {
    concept: `
<h2>1. Grupos de risco</h2>
<p>O estadiamento combina PSA, Gleason/ISUP e estágio clínico (TNM). Grupos simplificados: <strong>baixo risco</strong> — PSA &lt; 10, ISUP 1, cT1–T2a; <strong>intermediário</strong> — PSA 10–20 ou ISUP 2–3 ou cT2b–c; <strong>alto risco</strong> — PSA &gt; 20 ou ISUP 4–5 ou cT3–4. Doença metastática (M1) é estágio IV.</p>
<p>Estadiamento ósseo (cintilografia ou PSMA-PET) e linfonodal (TC/RM) são indicados em alto risco ou sintomas. A <strong>PSMA-PET</strong> é cada vez mais usada para recidiva bioquímica e estadiamento de alto risco.</p>

<h2>2. Tratamento localizado</h2>
<p><strong>Baixo risco:</strong> vigilância ativa é preferida em muitos pacientes, com PSA seriado, RM e biópsia de confirmação. Alternativas: prostatectomia radical, radioterapia, braquiterapia. <strong>Intermediário:</strong> prostatectomia ou radioterapia ± ADT; decisão por idade, comorbidade, função sexual e preferência. <strong>Alto risco localizado:</strong> prostatectomia com linfadenectomia ou radioterapia + ADT prolongada; muitas vezes combinação multimodal.</p>
<p>Prostatectomia radical: retropúbica, laparoscópica ou robótica; preservação dos feixes neurovasculares quando oncológica e funcionalmente possível. Complicações: incontinência, disfunção erétil, estenose anastomótica, linfocelo. Radioterapia: cistite actínica, proctite, disfunção erétil, segundo tumor.</p>

<h2>3. Doença avançada</h2>
<p>Metastático hormônio-sensível: <strong>ADT + docetaxel</strong> ou <strong>ADT + abiraterona/enzalutamida/apalutamida</strong> em pacientes com bom performance. ADT isolada é insuficiente na maioria. Castração resistente: docetaxel, abiraterona, enzalutamida, radium-223 (metástases ósseas), PSMA-lutetium em linhas avançadas. Prevenir eventos ósseos com cálcio/vitamina D e denosumabe ou ácido zoledrônico em alto risco.</p>
<p>Recidiva bioquímica após prostatectomia: PSA &gt; 0,2 ng/mL confirmado; após radioterapia, nadir + 2 ng/mL. Discutir radioterapia de salvamento precoce.</p>
<div class="callout warn"><strong>ADT:</strong> efeitos adversos incluem fogachos, osteoporose, sarcopenia, dislipidemia, diabetes, risco cardiovascular e disfunção sexual. Não é "só uma injeção".</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 58 anos, PSA 7, Gleason 3+3, cT1c, expectativa de vida 25 anos. Opções: vigilância ativa (preferida por muitos), cirurgia ou radioterapia. Discutir ansiedade, seguimento e efeitos adversos.</p>
<p>Homem de 70 anos, PSA 35, Gleason 4+4, cT3a, sem metástases. Conduta: alto risco — radioterapia + ADT prolongada ou prostatectomia com linfadenectomia; decisão multidisciplinary.</p>
<p>Homem de 75 anos, metástases ósseas, bom performance. Conduta: ADT + inibidor de AR ou docetaxel, conforme comorbidades; prevenção óssea.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Baixo risco:</strong> PSA &lt; 10, ISUP 1, T1–T2a.</li>
<li><strong>Alto risco:</strong> PSA &gt; 20, ISUP 4–5 ou T3–4.</li>
<li><strong>Baixo risco:</strong> vigilância ativa é opção.</li>
<li><strong>Metastático:</strong> ADT + docetaxel ou inibidor de AR.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"10-20-20: PSA 10, 20, 20 definem baixo, intermediário e alto."</em></div>
<p><strong>Pegadinha:</strong> ADT isolada não é tratamento padrão para doença metastática de alto volume; combinar.</p>`
  },
  pitfalls: [
    "Tratar câncer de baixo risco com cirurgia imediata em todos os casos.",
    "Esquecer linfadenectomia em alto risco.",
    "Usar ADT isolada em doença metastática de alto volume.",
    "Não monitorar efeitos metabólicos e ósseos da ADT."
  ],
  source: "EAU Prostate Cancer; NCCN Prostate Cancer; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-onc-17", topicId: "top-onc-17", area: "onc", minutes: 40,
  title: "Câncer de bexiga",
  sections: {
    concept: `
<h2>1. Epidemiologia e apresentação</h2>
<p>O carcinoma urotelial representa ~90% dos cânceres de bexiga. Fatores de risco: <strong>tabagismo</strong> (principal), exposição ocupacional a aminas aromáticas (borracha, tintas, couro), radioterapia pélvica, ciclofosfamida e infecção crônica por <em>Schistosoma haematobium</em> (carcinoma escamoso). A apresentação clássica é <strong>hematúria macroscópica indolor</strong>; pode haver hematúria microscópica, disúria ou infecção recorrente.</p>
<p>O diagnóstico é por <strong>cistoscopia</strong> e <strong>RTU vesical</strong> (ressecção transuretral), que fornece tecido para anatomopatológico e trata lesões não músculo-invasivas. TC urográfica avalia o trato superior. Citologia urinária é útil em lesões de alto grau e CIS, mas sensibilidade baixa para tumores de baixo grau.</p>

<h2>2. Câncer não músculo-invasivo (NMIBC)</h2>
<p>Representa ~70–75% dos casos: Ta (papilífero não invasivo), T1 (invasão da lâmina própria) e CIS (carcinoma in situ, alto grau). A estratificação de risco orienta o seguimento e a terapia intravesical. <strong>BCG intravesical</strong> é indicado em alto risco e CIS; reduz recidiva e progressão. Baixo risco pode ser apenas seguido após RTU completa. Seguimento com cistoscopia a cada 3–6–12 meses conforme risco.</p>
<p>RTU completa é essencial; em T1 de alto risco, pode-se re-ressecar (second look) para excluir invasão muscular. Falha de BCG em alto risco → cistectomia radical.</p>

<h2>3. Câncer músculo-invasivo e metastático</h2>
<p>T2 ou maior: <strong>cistectomia radical + linfadenectomia</strong>, com neoadjuvant quimioterapia à base de cisplatina em elegíveis. Derivações: conduto ileal (mais comum), neobexiga ortotópica (selecionados), reservatório continente. Alternativa em não candidatos à cirurgia: radioquimioterapia trimodal.</p>
<p>Metastático: quimioterapia à base de cisplatina (gemcitabina-cisplatina ou MVAC) e imunoterapia (pembrolizumabe) em linhas específicas. Carcinoma escamoso: cirurgia/radioterapia; não responde como o urotelial à quimio padrão.</p>
<div class="callout"><strong>Pérola:</strong> hematúria que "passou sozinha" não é tranquilizadora — o câncer de bexiga sangra de forma intermitente.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 65 anos, tabagista, hematúria indolor. Cistoscopia: lesão papilífera de 2 cm. RTU: Ta de baixo grau. Conduta: RTU completa e seguimento cistoscópico; BCG não é necessário para baixo risco.</p>
<p>Mulher de 70 anos, CIS extenso, citologia positiva. Conduta: BCG intravesical; se refratária, cistectomia. CIS é alto grau e tem risco de progressão.</p>
<p>Homem de 60 anos, tumor T2 de alto grau, função renal adequada. Conduta: quimioterapia neoadjuvante com cisplatina + cistectomia radical.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Urotelial</strong> = 90%; tabagismo é o principal fator.</li>
<li><strong>Hematúria indolor</strong> = sinal clássico.</li>
<li><strong>NMIBC:</strong> RTU ± BCG; seguimento cistoscópico.</li>
<li><strong>Músculo-invasivo:</strong> cistectomia + quimio neoadjuvante.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Sangue sem dor, cistoscopia por favor."</em></div>
<p><strong>Pegadinha:</strong> citologia negativa não exclui tumor de baixo grau; a cistoscopia é necessária.</p>`
  },
  pitfalls: [
    "Atribuir hematúria intermitente a ITU sem cistoscopia.",
    "Usar BCG em tumor de baixo risco sem indicação.",
    "Esquecer quimioterapia neoadjuvante no T2 elegível.",
    "Confundir carcinoma escamoso (Schistosoma) com urotelial."
  ],
  source: "EAU NMIBC; AUA Bladder Cancer Guideline; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-onc-18", topicId: "top-onc-18", area: "onc", minutes: 35,
  title: "Câncer renal e massas renais",
  sections: {
    concept: `
<h2>1. Tipos histológicos</h2>
<p>O <strong>carcinoma de células claras</strong> é o mais comum (~75%), seguido por papilífero (~15%) e cromófobo (~5%). O carcinoma de células claras associa-se à mutação de <em>VHL</em> e à angiogênese; é <strong>radiorresistente e quimiorresistente</strong>, mas responde a inibidores de tirosina-quinase e imunoterapia. Fatores de risco: tabagismo, obesidade, hipertensão, doença renal crônica e síndromes hereditárias (VHL, Birt-Hogg-Dubé, tuberous sclerosis).</p>

<h2>2. Apresentação e síndromes paraneoplásicas</h2>
<p>Muitos casos são incidentais em imagem. A tríade clássica (hematúria, dor lombar, massa palpável) é rara e indica doença avançada. Síndromes paraneoplásicas: <strong>hipercalcemia</strong> (PTHrP), <strong>policitemia</strong> (eritropoetina), <strong>hipertensão</strong> (renina), febre, perda de peso e <strong>síndrome de Stauffer</strong> (disfunção hepática sem metástase).</p>
<p>Na imagem, o carcinoma de células claras é sólido, hipervascular, com realce. O <strong>angiomiolipoma</strong> contém gordura (densidade negativa), associa-se à esclerose tuberosa e pode sangrar quando &gt; 4 cm (Wunderlich). Cistos complexos são classificados por Bosniak.</p>

<h2>3. Tratamento</h2>
<p>Doença localizada: <strong>nefrectomia parcial</strong> é preferida em T1 quando tecnicamente viável, preservando função renal. Nefrectomia radical para tumores maiores, centrais ou complexos. Linfadenectomia em alto risco. Trombose venosa (veia renal/cava) exige planejamento cirúrgico. Ablação (radiofrequência/crio) em pacientes de alto risco cirúrgico.</p>
<p>Metastático: imunoterapia combinada (ipilimumabe + nivolumabe) ou TKI + imunoterapia em primeira linha; TKI isolado em alguns cenários. Radioterapia paliativa para metástases ósseas. O papel da nefrectomia citorredutora diminuiu com imunoterapia, mas pode ser considerada em selecionados.</p>
<div class="callout warn"><strong>Não confunda:</strong> angiomiolipoma tem gordura; carcinoma de células claras não. Um tumor renal com gordura macroscópica é mais provavelmente AML.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Achado incidental de massa renal de 3 cm, exofítica, em paciente com função renal limítrofe. Conduta: nefrectomia parcial, se tecnicamente possível, para preservar parênquima.</p>
<p>Massa renal de 8 cm com trombose de veia renal e metástases pulmonares. Conduta: estadiamento, discussão de terapia sistêmica; cirurgia conforme resposta e sintomas.</p>
<p>Paciente com esclerose tuberosa e angiomiolipoma de 6 cm, sangramento. Conduta: embolização ou nefrectomia parcial; evitar nefrectomia total desnecessária.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Células claras</strong> = mais comum; VHL; radio/quimiorresistente.</li>
<li><strong>Paraneoplásicas:</strong> hipercalcemia, policitemia, hipertensão, Stauffer.</li>
<li><strong>Angiomiolipoma:</strong> gordura; esclerose tuberosa; sangra se &gt; 4 cm.</li>
<li><strong>T1:</strong> nefrectomia parcial quando possível.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Rim claro, sangue quente, cálcio alto."</em></div>
<p><strong>Pegadinha:</strong> a tríade clássica é rara; a maioria é incidental. Não espere hematúria para diagnosticar.</p>`
  },
  pitfalls: [
    "Dizer que carcinoma renal responde bem à quimioterapia.",
    "Confundir angiomiolipoma (gordura) com carcinoma de células claras.",
    "Indicar nefrectomia total para todo T1 sem considerar parcial.",
    "Esquecer síndromes paraneoplásicas no diagnóstico diferencial."
  ],
  source: "EAU Renal Cell Carcinoma; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-onc-19", topicId: "top-onc-19", area: "onc", minutes: 35,
  title: "Câncer de testículo",
  sections: {
    concept: `
<h2>1. Epidemiologia e apresentação</h2>
<p>O câncer de testículo é o tumor sólido mais comum em homens jovens (15–35 anos). Fatores de risco: <strong>criptorquidia</strong> (mesmo após correção), história familiar, infertilidade e síndrome de Klinefelter. Apresenta-se como <strong>massa testicular indolor</strong> ou aumento difuso; pode haver dor surda. Qualquer massa sólida testicular é câncer até prova contrária.</p>

<h2>2. Tipos e marcadores</h2>
<p>Tumores germinativos são ~95%: <strong>seminoma</strong> e <strong>não seminoma</strong> (carcinoma embrionário, tumor de saco vitelino, coriocarcinoma, teratoma). Marcadores: <strong>AFP</strong> eleva-se no tumor de saco vitelino (e em alguns não seminomas); <strong>hCG</strong> no coriocarcinoma (e em outros não seminomas); <strong>LDH</strong> reflete carga tumoral. <strong>Seminoma puro não eleva AFP</strong>; se AFP alta, é não seminoma ou misto.</p>
<p>Diagnóstico: ultrassom testicular (massa sólida, vascularizada) e dosagem de marcadores. TC de abdome/pelve e tórax para estadiamento. A biópsia não é feita antes da orquiectomia na maioria dos casos.</p>

<h2>3. Tratamento</h2>
<p><strong>Orquiectomia inguinal radical</strong> é o tratamento inicial e diagnóstico. Nunca orquiectomia escrotal: a drenagem linfática escrotal é inguinal e pode alterar disseminação. Considerar prótese testicular e preservação de sêmen antes da terapia sistêmica. Estágio I seminoma: vigilância, carboplatina ou radioterapia; não seminoma: vigilância, RPLND ou quimioterapia conforme risco. Doença avançada: quimioterapia à base de cisplatina (BEP).</p>
<p>Seminoma é radiosensível; não seminoma não é tratado com radioterapia de rotina. RPLND (linfadenectomia retroperitoneal) é opção em não seminoma estágio I de alto risco ou massa residual selecionada. Fertilidade: aconselhar preservação de sêmen antes de quimioterapia.</p>
<div class="callout"><strong>Pérola:</strong> massa testicular + AFP elevada em suposto seminoma = repensar o diagnóstico; seminoma puro não produz AFP.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 24 anos, aumento testicular indolor há 2 meses. US: massa sólida. AFP 320 ng/mL, hCG normal. Conduta: orquiectomia inguinal + marcadores + TC. A AFP elevada sugere componente de saco vitelino (não seminoma).</p>
<p>Homem de 30 anos, seminoma puro estágio I. Opções: vigilância com TC/marcadores, carboplatina adjuvante ou radioterapia. Discutir recidiva e toxicidade.</p>
<p>Homem de 28 anos com metástases pulmonares de não seminoma. Conduta: quimioterapia BEP e acompanhamento de marcadores; preservação de fertilidade antes.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>15–35 anos:</strong> tumor sólido mais comum.</li>
<li><strong>AFP:</strong> saco vitelino; <strong>hCG:</strong> coriocarcinoma; <strong>LDH:</strong> carga.</li>
<li><strong>Seminoma puro:</strong> AFP normal; radiosensível.</li>
<li><strong>Cirurgia:</strong> orquiectomia inguinal radical.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"AFP = alimento do saco vitelino; hCG = coriocarcinoma."</em></div>
<p><strong>Pegadinha:</strong> nunca biopsiar testículo por escroto nem operar por via escrotal.</p>`
  },
  pitfalls: [
    "Achar que seminoma puro eleva AFP.",
    "Indicar orquiectomia escrotal.",
    "Não dosar marcadores antes da cirurgia.",
    "Esquecer preservação de sêmen antes da quimioterapia."
  ],
  source: "EAU Testicular Cancer; NCCN Testicular Cancer."
});

URO.lessons.push({
  id: "aula-and-20", topicId: "top-and-20", area: "and", minutes: 30,
  title: "Bolsa escrotal aguda e torção testicular",
  sections: {
    concept: `
<h2>1. Diagnóstico diferencial</h2>
<p><strong>Torção testicular:</strong> dor súbita intensa, náuseas/vômitos, testículo alto e horizontalizado, reflexo cremastérico ausente, sem alívio com elevação (Prehn negativo). Mais comum em adolescentes, mas pode ocorrer em qualquer idade. A anomalia <strong>bell-clapper</strong> (mesentério largo) permite rotação.</p>
<p><strong>Epididimite:</strong> início gradual, febre, dor localizada no epidídimo, alívio com elevação (Prehn positivo). <strong>Torção do apêndice testicular:</strong> criança, dor no polo superior, nódulo azulado ("blue dot sign"). <strong>Hérnia encarcerada, trauma, tumor e Fournier</strong> completam o diferencial.</p>

<h2>2. Exames</h2>
<p>O diagnóstico é clínico. Doppler testicular mostra fluxo reduzido/ausente na torção, mas um exame normal não exclui torção intermitente. Não atrase a cirurgia por imagem se a suspeita é alta. A janela de salvamento é de <strong>até 6 horas</strong>; após 12 horas, a taxa cai drasticamente.</p>

<h2>3. Tratamento</h2>
<p><strong>Exploração escrotal urgente</strong> com detorção e orquidopexia se o testículo for viável; orquiectomia se necrótico. Fixar o <strong>testículo contralateral</strong> (orquidopexia bilateral), pois a anomalia é bilateral. Analgesia e antieméticos são adjuvantes, não tratamento. Acompanhar fertilidade e função hormonal.</p>
<div class="callout warn"><strong>Regra de ouro:</strong> na dúvida entre torção e epididimite, explore. O custo de uma cirurgia branca é menor que o de um testículo perdido.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Adolescente de 16 anos, dor testicular súbita há 2 h, náuseas, testículo alto, reflexo cremastérico ausente. Conduta: exploração cirúrgica imediata. Se viável, detorção e orquidopexia bilateral.</p>
<p>Homem de 40 anos, dor escrotal há 3 dias, febre, epidídimo doloroso, alívio com elevação. Conduta: epididimite — ceftriaxona + doxiciclina ou levofloxacino conforme risco; excluir torção se dúvida.</p>
<p>Criança com dor no polo superior e nódulo azulado: torção do apêndice testicular; tratamento sintomático, geralmente autolimitado.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Torção:</strong> súbita, testículo alto, reflexo ausente, Prehn negativo.</li>
<li><strong>Janela:</strong> &lt; 6 h; cirurgia imediata.</li>
<li><strong>Epididimite:</strong> gradual, febre, Prehn positivo.</li>
<li><strong>Sempre:</strong> fixar contralateral.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Torção sobe e some o reflexo; epididimite desce e alivia."</em></div>
<p><strong>Pegadinha:</strong> Doppler normal não afasta torção intermitente; clínica manda.</p>`
  },
  pitfalls: [
    "Aguardar Doppler antes de operar torção com clínica típica.",
    "Confundir torção com epididimite pelo alívio da dor.",
    "Não fixar o testículo contralateral.",
    "Prescrever apenas analgesia e alta."
  ],
  source: "EAU Sexual and Reproductive Health; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-and-21", topicId: "top-and-21", area: "and", minutes: 35,
  title: "Infertilidade masculina e varicocele",
  sections: {
    concept: `
<h2>1. Definição e avaliação</h2>
<p>Infertilidade é a ausência de gravidez após 12 meses de relações sem proteção. O fator masculino está presente em ~50% dos casais. Avaliação: história (criptorquidia, infecções, trauma, cirurgias, medicamentos, álcool, tabagismo, calor), exame físico (testículos, varicocele, epidídimo) e <strong>espermograma</strong>.</p>
<p>Valores de referência da OMS (6.ª edição, 2021): volume ≥ 1,4 mL; concentração ≥ 16 milhões/mL; total ≥ 39 milhões; motilidade progressiva ≥ 30%; morfologia normal ≥ 4%. Alterações isoladas exigem repetição em 2–4 semanas. A ausência de espermatozoides (azoospermia) deve ser confirmada por centrifugação.</p>

<h2>2. Classificação fisiopatológica</h2>
<p><strong>Pré-testicular:</strong> hipogonadismo hipogonadotrófico (Kallmann, tumor hipofisário, uso de esteroides), com FSH/LH baixos. <strong>Testicular:</strong> falência primária (Klinefelter, criptorquidia, quimioterapia, trauma, varicocele), com FSH/LH altos. <strong>Pós-testicular:</strong> obstrução (vasectomia, infecção, CBAVD), ejaculação retrógrada ou disfunção sexual.</p>
<p>Azoospermia com volume baixo, pH ácido e ausência de frutose sugere obstrução ejaculatória ou agenesia de ductos deferentes (CBAVD, mutação CFTR). FSH baixo sugere causa central; FSH alto sugere falência testicular. Cariótipo e microdeleções do cromossomo Y em casos selecionados.</p>

<h2>3. Varicocele e tratamento</h2>
<p>Varicocele é dilatação das veias do plexo pampiniforme, mais comum à esquerda. Pode causar dor surda e infertilidade por aumento de temperatura e refluxo. Exame: "saco de vermes" à palpação com Valsalva. Reparo (microcirúrgico) é indicado em infertilidade com varicocele palpável e parâmetros seminais alterados, dor significativa ou atrofia testicular.</p>
<p>Tratamento conforme causa: hipogonadismo central com hCG/FSH ou clomifeno; obstrução com reconstrução ou recuperação espermática; disfunção erétil/ejaculatória com tratamento específico; técnicas de reprodução assistida. Orientar estilo de vida e evitar calor testicular.</p>
<div class="callout"><strong>Pérola:</strong> varicocele direita isolada, sem causa, é rara e deve levantar suspeita de tumor retroperitoneal.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Casal com infertilidade há 1 ano. Espermograma: 8 milhões/mL, motilidade 25%. Exame: varicocele esquerda palpável. Conduta: repetir espermograma, avaliar parceira e discutir reparo microcirúrgico da varicocele.</p>
<p>Homem com azoospermia, volume 0,8 mL, pH 6,2, frutose ausente. Suspeita: obstrução ejaculatória/CBAVD; solicitar CFTR e avaliação especializada.</p>
<p>Homem com FSH e LH baixos, testosterona baixa, azoospermia. Suspeita: hipogonadismo hipogonadotrófico; investigar hipófise e tratar com gonadotrofinas se desejo de fertilidade.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>OMS:</strong> ≥ 16 M/mL, ≥ 39 M totais, motilidade ≥ 30%, morfologia ≥ 4%.</li>
<li><strong>FSH alto</strong> = falência testicular; <strong>FSH baixo</strong> = causa central.</li>
<li><strong>Varicocele:</strong> esquerda; "saco de vermes"; reparo se alteração.</li>
<li><strong>CBAVD:</strong> volume baixo, pH ácido, frutose ausente.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"FSH alto, testículo falhou; FSH baixo, cérebro não mandou."</em></div>
<p><strong>Pegadinha:</strong> varicocele direita isolada não é comum; investigue retroperitônio.</p>`
  },
  pitfalls: [
    "Achar que infertilidade é sempre problema feminino.",
    "Não repetir espermograma alterado.",
    "Indicar cirurgia de varicocele sem alteração seminal ou dor.",
    "Ignorar CBAVD em azoospermia com volume baixo."
  ],
  source: "WHO Manual for the Examination of Human Semen, 6. ed.; AUA/ASRM Male Infertility Guideline."
});

URO.lessons.push({
  id: "aula-and-22", topicId: "top-and-22", area: "and", minutes: 30,
  title: "Disfunção erétil e priapismo",
  sections: {
    concept: `
<h2>1. Disfunção erétil</h2>
<p>Incapacidade de obter ou manter ereção suficiente para relação sexual. Causas orgânicas: vascular (aterosclerose, diabetes), neurológica (lesão medular, cirurgia pélvica), hormonal (hipogonadismo), medicamentosa (anti-hipertensivos, antidepressivos, finasterida) e psicogênica. A disfunção erétil pode ser marcador precoce de doença cardiovascular.</p>
<p>Avaliação: história, exame, testosterona, glicemia, lipídios; exames vasculares ou noturnos em casos selecionados. Tratamento: estilo de vida, controle de fatores de risco, <strong>inibidores da PDE5</strong> (sildenafila, tadalafila), vacuum, injeções intracavernosas de alprostadil e prótese peniana. <strong>PDE5i são contraindicados com nitratos</strong> (hipotensão grave).</p>

<h2>2. Priapismo</h2>
<p><strong>Isquêmico (baixo fluxo):</strong> ereção dolorosa e rígida por &gt; 4 horas, corpos cavernosos rígidos, glande flácida; causa: drogas (cocaína, antidepressivos), anemia falciforme, hiperafinidade. É emergência: aspirar sangue dos corpos cavernosos e injetar <strong>fenilefrina</strong>; se falhar, shunt cirúrgico. <strong>Não isquêmico (alto fluxo):</strong> indolor, trauma perineal, fístula arteriovenosa; geralmente observação ou embolização.</p>
<p><strong>Priapismo intermitente:</strong> episódios recorrentes; tratar causa e orientar. A isquemia prolongada causa fibrose e disfunção erétil permanente.</p>
<div class="callout warn"><strong>Tempo é tecido:</strong> priapismo isquêmico &gt; 4 h exige intervenção imediata. Não tente "esperar passar".</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 58 anos, diabetes, disfunção erétil há 1 ano. Testosterona normal; usa anti-hipertensivo. Conduta: otimizar fatores de risco, revisar medicações e iniciar PDE5i se sem contraindicação. Perguntar sobre nitratos.</p>
<p>Homem de 30 anos, ereção dolorosa há 5 h após cocaína. Conduta: priapismo isquêmico — analgesia, aspiração e fenilefrina intracavernosa; se refratário, shunt.</p>
<p>Homem de 25 anos, ereção indolor após trauma perineal, sem rigidez completa. Suspeita de priapismo de alto fluxo; Doppler e observação/embolização.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>ED:</strong> marca de doença cardiovascular; PDE5i contraindicado com nitrato.</li>
<li><strong>Priapismo isquêmico:</strong> dor, &gt; 4 h, emergência; aspirar + fenilefrina.</li>
<li><strong>Priapismo alto fluxo:</strong> indolor, trauma; observação/embolização.</li>
<li><strong>Complicação:</strong> fibrose e ED permanente.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Rígido e doído = isquêmico; mole e indolor = alto fluxo."</em></div>
<p><strong>Pegadinha:</strong> nunca prescrever PDE5i para paciente em uso de nitrato.</p>`
  },
  pitfalls: [
    "Prescrever PDE5i sem perguntar sobre nitratos.",
    "Achar que priapismo indolor não é grave.",
    "Esperar mais de 4 horas para tratar priapismo isquêmico.",
    "Não investigar causa medicamentosa ou hematológica."
  ],
  source: "EAU Sexual and Reproductive Health; AUA Priapism Guideline."
});

URO.lessons.push({
  id: "aula-and-23", topicId: "top-and-23", area: "and", minutes: 25,
  title: "Hipogonadismo masculino",
  sections: {
    concept: `
<h2>1. Definição e diagnóstico</h2>
<p>Hipogonadismo masculino é a deficiência de testosterona com sintomas: diminuição de libido, disfunção erétil, fadiga, perda de massa muscular, aumento de gordura, alterações de humor e osteoporose. O diagnóstico exige <strong>testosterona total baixa em duas manhãs</strong> (geralmente &lt; 300 ng/dL) e sintomas consistentes. Obesidade, diabetes e doença aguda podem reduzir falsamente a testosterona.</p>
<p>Dosar LH e FSH: <strong>primário</strong> (testicular) tem LH/FSH altos; <strong>secundário</strong> (central) tem LH/FSH baixos ou inapropriadamente normais. Investigar causa: Klinefelter (cariótipo), tumor hipofisário (prolactina, RM), hemocromatose, uso de esteroides anabolizantes, medicamentos.</p>

<h2>2. Tratamento</h2>
<p>Reposição de testosterona melhora sintomas e densidade óssea, mas <strong>suprime a espermatogênese</strong> e não é método contraceptivo confiável. Contraindicações: câncer de próstata ativo ou suspeita, câncer de mama masculino, hematócrito &gt; 54%, apneia do sono não tratada, insuficiência cardíaca descompensada e desejo de fertilidade. Monitorar hematócrito, PSA e sintomas.</p>
<p>Para homens com desejo de fertilidade e hipogonadismo secundário, usar <strong>hCG</strong> (estimula células de Leydig) ou gonadotrofinas; clomifeno pode ser alternativa em casos selecionados. Não usar testosterona exógena esperando melhorar fertilidade — ela piora.</p>
<div class="callout"><strong>Pérola:</strong> testosterona baixa + infertilidade + testículos pequenos e firmes em homem alto = pense em Klinefelter (47,XXY).</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 45 anos, fadiga, libido baixa, testosterona 240 ng/dL em duas manhãs, LH/FSH baixos, prolactina normal. Suspeita de hipogonadismo secundário; avaliar sintomas e causas. Se desejo de fertilidade, hCG/clomifeno; se não, testosterona com monitorização.</p>
<p>Homem de 60 anos com câncer de próstata tratado: reposição de testosterona é contraindicada.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Diagnóstico:</strong> 2 dosagens matinais baixas + sintomas.</li>
<li><strong>Primário:</strong> LH/FSH altos; <strong>secundário:</strong> baixos.</li>
<li><strong>Testosterona</strong> suprime fertilidade.</li>
<li><strong>Contraindicações:</strong> câncer de próstata, hematócrito alto, apneia não tratada.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Testosterona dá força, mas tira esperma."</em></div>
<p><strong>Pegadinha:</strong> reposição não é tratamento de infertilidade; pode ser o oposto.</p>`
  },
  pitfalls: [
    "Diagnosticar com uma única dosagem ou à tarde.",
    "Prescrever testosterona para homem com desejo de fertilidade.",
    "Não dosar LH/FSH para localizar a causa.",
    "Ignorar contraindicações como hematócrito alto."
  ],
  source: "EAU Sexual and Reproductive Health; Endocrine Society Guideline."
});

URO.lessons.push({
  id: "aula-tra-24", topicId: "top-tra-24", area: "tra", minutes: 30,
  title: "Trauma renal e ureteral",
  sections: {
    concept: `
<h2>1. Trauma renal</h2>
<p>O rim é o órgão geniturinário mais atingido no trauma fechado. A classificação <strong>AAST</strong> vai de grau I (contusão/hematoma subcapsular) a V (avulsão do pedículo ou rim destruído). A TC com contraste (fases arterial e excretora) é o exame de escolha em pacientes estáveis; mostra laceração, extravasamento, hematoma e perfusão.</p>
<p>Tratamento: maioria dos graus I–IV em pacientes estáveis é conservadora, com monitorização e repouso. <strong>Indicações absolutas de cirurgia:</strong> instabilidade hemodinâmica, hematoma em expansão, avulsão do pedículo. Lesões de bexiga e ureter associadas devem ser excluídas. Em trauma penetrante, a taxa de exploração é maior.</p>

<h2>2. Trauma ureteral</h2>
<p>Raro no trauma externo; a causa mais comum é <strong>iatrogênica</strong> (cirurgia pélvica, ginecológica, colorretal). Pode se manifestar no pós-operatório com dor lombar, febre, fístula urinária ou aumento de creatinina. Diagnóstico: TC urográfica ou pielografia; lesões pequenas podem ser tratadas com stent; lesões extensas exigem reconstrução (ureteroneocistostomia, psoas hitch, Boari, enxerto ileal).</p>

<h2>3. Princípios</h2>
<p>Estabilização primeiro (ABC), avaliar trauma associado. Hematúria microscópica isolada em trauma fechado estável pode não exigir imagem em todos os casos, mas hematúria macroscópica, mecanismo de alto impacto ou instabilidade indicam TC. Não atrasar laparotomia por imagem em paciente instável.</p>
<div class="callout warn"><strong>Pérola:</strong> rim com extravasamento de contraste e paciente estável costuma ser manejado com stent/observação; rim sangrando com instabilidade vai para cirurgia.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Paciente de 25 anos, trauma de flanco, hematúria macroscópica, estável. TC: laceração renal grau III sem extravasamento. Conduta: conservadora, monitorização, repouso e controle de dor.</p>
<p>Paciente de 40 anos, trauma penetrante, hipotensão, hematoma perirrenal em expansão. Conduta: laparotomia; nefrectomia se rim não reconstruível.</p>
<p>Pós-operatório de histerectomia com dor lombar e febre: suspeita de lesão ureteral iatrogênica; TC urográfica e stent/reconstrução.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Rim:</strong> trauma geniturinário mais comum; TC com contraste.</li>
<li><strong>Graus I–IV estáveis:</strong> conservador.</li>
<li><strong>Cirurgia:</strong> instabilidade, hematoma expansivo, pedículo.</li>
<li><strong>Ureter:</strong> causa mais comum é iatrogênica.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Estável, conserva; instável, opera."</em></div>
<p><strong>Pegadinha:</strong> hematúria microscópica não é sinônimo de trauma grave; contexto e mecanismo importam.</p>`
  },
  pitfalls: [
    "Operar todo trauma renal com hematúria.",
    "Não avaliar ureter em cirurgia pélvica complicada.",
    "Atrasar laparotomia por TC em paciente instável.",
    "Esquecer lesões associadas de bexiga e uretra."
  ],
  source: "EAU Urological Trauma; AUA Urotrauma Guideline."
});

URO.lessons.push({
  id: "aula-tra-25", topicId: "top-tra-25", area: "tra", minutes: 30,
  title: "Trauma vesical e uretral",
  sections: {
    concept: `
<h2>1. Trauma vesical</h2>
<p>Associa-se a fratura pélvica e trauma abdominal. <strong>Ruptura extraperitoneal:</strong> mais comum, geralmente por fragmento ósseo; dor suprapúbica, hematúria, incapacidade de urinar. <strong>Ruptura intraperitoneal:</strong> geralmente por trauma abdominal com bexiga cheia; o domo rompe e a urina extravasa para o peritônio, causando dor abdominal e sinais peritoneais. Diagnóstico: <strong>cistografia</strong> (ou TC cistográfica) com contraste.</p>
<p>Tratamento: extraperitoneal geralmente cateter vesical por 7–14 dias; intraperitoneal exige reparo cirúrgico e drenagem. Avaliar lesões associadas.</p>

<h2>2. Trauma uretral</h2>
<p><strong>Posterior (membranosa):</strong> fratura pélvica, sangue no meato, retenção, bexiga palpável, próstata alta. <strong>Anterior (bulbar):</strong> trauma perineal por queda a cavaleiro, dor perineal, hematoma em "borboleta", sangue no meato. Diagnóstico: <strong>uretrocistografia retrógrada</strong>; não tentar cateterismo uretral às cegas.</p>
<p>Manejo inicial: <strong>cistostomia suprapúbica</strong> para derivação, antibióticos e avaliação de trauma associado. Lesões parciais podem ser tratadas com cateter suprapúbico; completas geralmente exigem uretroplastia tardia (3–6 meses). Complicações: estenose, incontinência, disfunção erétil.</p>

<h2>3. Frases que a prova adora</h2>
<p>"Sangue no meato" = não passar sonda. "Próstata alta" = lesão de uretra posterior. "Fratura pélvica" = pensar em uretra e bexiga. "Urina no peritônio" = ruptura intraperitoneal.</p>
<div class="callout warn"><strong>Erro fatal:</strong> cateterismo uretral em suspeita de lesão uretral pode converter lesão parcial em completa e provocar falso trajeto.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 35 anos, fratura pélvica, sangue no meato, retenção. Conduta: uretrocistografia retrógrada + cistostomia suprapúbica; não cateterizar.</p>
<p>Paciente com trauma abdominal, bexiga cheia, dor e rigidez abdominal, hematúria. TC cistográfica: extravasamento intraperitoneal. Conduta: laparotomia e reparo.</p>
<p>Queda de bicicleta, dor perineal, hematoma em borboleta, sangue no meato. Suspeita de lesão de uretra bulbar; uretrocistografia e derivação.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Extraperitoneal:</strong> cateter; <strong>intraperitoneal:</strong> cirurgia.</li>
<li><strong>Uretra posterior:</strong> fratura pélvica; próstata alta.</li>
<li><strong>Uretra anterior:</strong> straddle; hematoma perineal.</li>
<li><strong>Não cateterizar</strong> se sangue no meato; cistostomia.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Meato sangrou, sonda parou."</em></div>
<p><strong>Pegadinha:</strong> bexiga palpável + retenção + fratura pélvica não é retenção simples; pense em uretra.</p>`
  },
  pitfalls: [
    "Passar sonda vesical com sangue no meato.",
    "Confundir ruptura intra e extraperitoneal.",
    "Não fazer cistografia em trauma pélvico com hematúria.",
    "Reparar uretra posterior na fase aguda sem necessidade."
  ],
  source: "EAU Urological Trauma; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-tra-26", topicId: "top-tra-26", area: "tra", minutes: 30,
  title: "Fournier e sepse urológica",
  sections: {
    concept: `
<h2>1. Fournier</h2>
<p>Fasciíte necrosante da região perineal, genital e perianal, de origem polimicrobiana (aeróbios e anaeróbios). Mais comum em homens diabéticos, imunossuprimidos, obesos ou com doença vascular. Porta de entrada: infecção perineal, abscesso, trauma, cirurgia, cateter. A infecção se dissemina pelo plano fascial, causando trombose de vasos e necrose cutânea.</p>
<p>Clínica: dor intensa desproporcional, edema, eritema, crepitação, bolhas, necrose, febre e toxemia. A <strong>crepitação</strong> é sinal tardio; não espere por ela. Diagnóstico é clínico; TC ajuda a delimitar gás e extensão, mas não atrasa a cirurgia.</p>

<h2>2. Tratamento</h2>
<p><strong>Desbridamento cirúrgico imediato e repetido</strong> é a pedra angular. Antibiótico de amplo espectro: piperacilina-tazobactam + vancomicina (MRSA) ou clindamicina (anaeróbios/tóxico), ajustado por cultura. Ressuscitação, controle glicêmico, suporte nutricional e UTI. Testículos geralmente são preservados porque têm irrigação própria, mas podem ser expostos. Mortalidade pode chegar a 20–40%.</p>

<h2>3. Sepse urológica</h2>
<p>Foco urinário é uma causa comum de sepse. Princípios: reconhecer disfunção orgânica, coletar culturas, antibiótico precoce, ressuscitação e <strong>controle do foco</strong> (drenar obstrução, abscesso, cateter infectado). Pielonefrite obstrutiva e Fournier são emergências cirúrgicas.</p>
<div class="callout danger"><strong>Não faça:</strong> tratar Fournier apenas com antibiótico. A necrose não melhora sem desbridamento; o atraso aumenta mortalidade.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Homem de 60 anos, diabético, dor perineal intensa, febre, crepitação e necrose. Conduta: ressuscitação + antibiótico IV + desbridamento cirúrgico urgente; reavaliar em 24 h.</p>
<p>Paciente com pielonefrite e cálculo obstrutivo, hipotenso. Conduta: sepse — antibiótico precoce + desobstrução urgente + UTI.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Fournier:</strong> fasciíte necrosante polimicrobiana; diabetes.</li>
<li><strong>Dor desproporcional</strong> + crepitação + necrose.</li>
<li><strong>Tratamento:</strong> desbridamento imediato + antibiótico amplo.</li>
<li><strong>Sepse urinária:</strong> controle de foco é obrigatório.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Fournier não se trata com receita; trata-se com bisturi."</em></div>
<p><strong>Pegadinha:</strong> crepitação é sinal tardio; a ausência não exclui Fournier.</p>`
  },
  pitfalls: [
    "Aguardar confirmação por imagem para operar Fournier.",
    "Usar antibiótico isolado sem desbridamento.",
    "Não controlar glicemia e instabilidade.",
    "Esquecer que sepse urinária pode exigir drenagem."
  ],
  source: "EAU Urological Infections; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-ped-27", topicId: "top-ped-27", area: "ped", minutes: 30,
  title: "Criptorquidia, fimose e hérnia inguinal",
  sections: {
    concept: `
<h2>1. Criptorquidia</h2>
<p>Testículo não descido ocorre em ~3% dos recém-nascidos a termo e até 30% dos prematuros; muitos descem espontaneamente nos primeiros meses. Se não estiver na bolsa aos 6 meses (corrigidos), a probabilidade de descida espontânea é baixa. <strong>Orquidopexia</strong> é recomendada entre 6 e 18 meses (idealmente até 12 meses) para reduzir risco de infertilidade e facilitar vigilância de malignidade. Testículo retrátil não precisa de cirurgia; testículo ectópico e não palpável exigem investigação (US/ laparoscopia).</p>

<h2>2. Fimose e parafimose</h2>
<p>Fimose fisiológica é comum e melhora com o tempo; não force a retração. Fimose patológica (cicatricial, balanopostite de repetição) pode indicar circuncisão. <strong>Parafimose</strong> é emergência: prepúcio retraído não retorna, causando edema e isquemia da glande; reduzir manualmente com analgesia e compressão, ou cirurgia se falhar. Não confundir com fimose simples.</p>

<h2>3. Hérnia e hidrocele</h2>
<p>Hérnia inguinal indireta é a mais comum na criança, por <strong>persistência do processo vaginal</strong>. Pode encarcerar; cirurgia é indicada. Hidrocele comunicante também decorre do processo vaginal patente e transilumina; hidrocele não comunicante do recém-nascido pode regredir. Torção testicular e tumor entram no diferencial de aumento escrotal.</p>
<div class="callout"><strong>Pérola:</strong> testículo não palpável + virilização normal = investigar; não assumir criptorquidia unilateral sem exame cuidadoso.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Lactente de 8 meses com testículo direito não palpável na bolsa. Conduta: exame em ambiente aquecido, tentar trazer o testículo; se não descer, encaminhar para orquidopexia até 12–18 meses.</p>
<p>Criança com prepúcio retraído, edema e dor na glande: parafimose — reduzir urgentemente.</p>
<p>Lactente com aumento escrotal que transilumina e varia de tamanho: hidrocele comunicante; avaliar hérnia associada e indicar cirurgia se persistente.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Criptorquidia:</strong> orquidopexia 6–18 meses; risco de infertilidade e tumor.</li>
<li><strong>Parafimose:</strong> emergência; reduzir.</li>
<li><strong>Hérnia indireta:</strong> processo vaginal patente; risco de encarceramento.</li>
<li><strong>Hidrocele:</strong> transilumina; comunicante pode operar.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Não desceu até 6 meses, chama o cirurgião."</em></div>
<p><strong>Pegadinha:</strong> testículo retrátil não é criptorquidia; não operar sem exame cuidadoso.</p>`
  },
  pitfalls: [
    "Indicar cirurgia para testículo retrátil.",
    "Atrasar orquidopexia além de 18 meses sem motivo.",
    "Não reconhecer parafimose como emergência.",
    "Confundir hidrocele com hérnia encarcerada."
  ],
  source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
});

URO.lessons.push({
  id: "aula-ped-28", topicId: "top-ped-28", area: "ped", minutes: 30,
  title: "Refluxo, hidronefrose e válvula de uretra posterior",
  sections: {
    concept: `
<h2>1. Hidronefrose antenatal</h2>
<p>A causa mais comum de hidronefrose fetal é a <strong>obstrução da junção ureteropélvica (JUP)</strong>, seguida por refluxo vesicoureteral e válvula de uretra posterior. Avaliação pós-natal: ultrassom após 48–72 h (evitar desidratação neonatal), creatinina, e cintilografia (MAG3) para função e drenagem em casos selecionados. Hidronefrose leve pode ser observada; grave ou com função reduzida pode exigir cirurgia (pieloplastia).</p>

<h2>2. Refluxo vesicoureteral</h2>
<p>Classificado em graus I–V pela uretrocistografia miccional (VCUG): I (ureter apenas), II (até pelve), III (dilatação leve), IV (dilatação e tortuosidade), V (dilatação grave com perda de impressões papilares). Refluxo de baixo grau frequentemente resolve; alto grau associa-se a pielonefrite e cicatriz renal. Manejo: antibiótico profilático em casos selecionados, correção de disfunção vesical, cirurgia (reimplante) em refluxo grave recorrente ou cicatriz.</p>

<h2>3. Válvula de uretra posterior</h2>
<p>Obstrução congênita da uretra posterior em meninos. Apresentação: hidronefrose bilateral, bexiga espessada, jato fraco, retenção, ITU e insuficiência renal. A uretrocistografia mostra dilatação da uretra posterior com transição abrupta (<strong>sinal do keyhole</strong>). Tratamento inicial: <strong>cateterismo vesical urgente</strong>, antibiótico e correção de distúrbios; depois, ablação endoscópica das válvulas. Seguimento de função renal e bexiga de baixa complacência.</p>

<h2>4. Enurese</h2>
<p>Enurese noturna primária em criança &gt; 5 anos, sem sintomas diurnos, é comum e tem resolução espontânea. Tratamento: medidas comportamentais, alarme de enurese e desmopressina. Enurese secundária ou com sintomas diurnos exige investigação (ITU, constipação, bexiga hiperativa, diabetes, causas neurológicas).</p>
<div class="callout warn"><strong>Pérola:</strong> menino com hidronefrose bilateral e jato fraco não é "ITU de repetição" — pense em válvula de uretra posterior.</div>`,
    practice: `
<h2>Aplicação prática</h2>
<p>Recém-nascido com hidronefrose antenatal grave bilateral, bexiga espessada. Conduta: ultrassom pós-natal, cateterismo se retenção, uretrocistografia; se válvula, ablação.</p>
<p>Criança de 3 anos com ITUs febris de repetição e refluxo grau IV. Conduta: profilaxia antibiótica, avaliação de disfunção vesical e considerar reimplante cirúrgico.</p>
<p>Criança de 7 anos com enurese noturna isolada: medidas comportamentais, alarme ou desmopressina; investigar se sintomas diurnos.</p>`,
    retention: `
<h2>Recordação ativa</h2>
<ul><li><strong>Hidronefrose:</strong> JUP é a causa mais comum.</li>
<li><strong>Refluxo:</strong> graus I–V; VCUG; baixo grau resolve.</li>
<li><strong>PUV:</strong> menino, keyhole, cateter urgente + ablação.</li>
<li><strong>Enurese:</strong> alarme/desmopressina; investigar se secundária.</li></ul>
<div class="mnemonic"><strong>Mnemônico:</strong> <em>"Menino, jato fraco, bexiga grossa = válvula."</em></div>
<p><strong>Pegadinha:</strong> hidronefrose antenatal não é diagnóstico; é sinal que exige investigação pós-natal.</p>`
  },
  pitfalls: [
    "Investigar hidronefrose fetal apenas no pré-natal e não repetir após o nascimento.",
    "Tratar refluxo grau I–II com cirurgia de imediato.",
    "Não cateterizar válvula de uretra posterior.",
    "Tratar enurese secundária como primária sem investigar."
  ],
  source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
});
