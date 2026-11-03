/* Questões 31–60 — Oncologia, Andrologia, Trauma e Pediatria */
URO.questions = URO.questions || [];

URO.questions.push(
  {
    id: "q-onc-01", topicId: "top-onc-15", area: "onc", difficulty: 2,
    stem: "Homem de 63 anos, assintomático, pai com câncer de próstata. Toque retal normal, próstata de 40 g. PSA total 6,8 ng/mL e fração livre 12%. Qual é a conduta mais adequada após confirmar o PSA?",
    options: [
      "Biopsia prostática imediata às cegas, sem outros exames.",
      "Repetir PSA em condições adequadas e solicitar RM multiparamétrica antes de decidir a biópsia.",
      "Iniciar antibioticoterapia por 30 dias.",
      "Indicar prostatectomia radical imediatamente.",
      "Tranquilizar, pois a fração livre baixa exclui câncer."
    ],
    answer: 1,
    comment: "PSA elevado não é indicação automática de biópsia. Fração livre de 12% aumenta a suspeita, mas o próximo passo é confirmar o PSA e fazer RM multiparamétrica (PI-RADS) para orientar biópsia dirigida + sistemática. Antibiótico não trata câncer; cirurgia sem diagnóstico é inadequada; fração livre baixa aumenta, não exclui, o risco.",
    source: "EAU Prostate Cancer; AUA Early Detection."
  },
  {
    id: "q-onc-02", topicId: "top-onc-15", area: "onc", difficulty: 1,
    stem: "Um laudo de biópsia prostática descreve adenocarcinoma Gleason 3+3 = 6. A que grupo ISUP corresponde?",
    options: [
      "ISUP 1.",
      "ISUP 2.",
      "ISUP 3.",
      "ISUP 4.",
      "ISUP 5."
    ],
    answer: 0,
    comment: "Gleason 3+3 = 6 corresponde ao ISUP grau 1, considerado de baixo risco. ISUP 2 é 3+4 = 7; ISUP 3 é 4+3 = 7; ISUP 4 é 8; ISUP 5 é 9–10. O grupo ISUP orienta prognóstico e tratamento, mas deve ser interpretado junto com PSA, estágio clínico e volume tumoral.",
    source: "EAU Prostate Cancer; NCCN."
  },
  {
    id: "q-onc-03", topicId: "top-onc-16", area: "onc", difficulty: 2,
    stem: "Homem de 58 anos, PSA 6,0 ng/mL, Gleason 3+3 em 2 de 12 fragmentos, cT1c, expectativa de vida de 25 anos. Qual é a conduta mais adequada?",
    options: [
      "ADT imediata.",
      "Vigilância ativa com PSA seriado, RM e biópsia de confirmação, discutindo alternativas.",
      "Cistectomia radical.",
      "Quimioterapia com cisplatina.",
      "Radioterapia paliativa."
    ],
    answer: 1,
    comment: "O quadro é de câncer de próstata de baixo risco. Vigilância ativa é uma opção preferencial, com monitorização rigorosa e tratamento se houver progressão. ADT imediata, cistectomia, quimioterapia e radioterapia paliativa não são indicadas nesse cenário. A decisão deve ser compartilhada, considerando ansiedade e preferências.",
    source: "EAU Prostate Cancer; NCCN."
  },
  {
    id: "q-onc-04", topicId: "top-onc-16", area: "onc", difficulty: 2,
    stem: "Homem de 68 anos com adenocarcinoma de próstata PSA 35 ng/mL, Gleason 4+4, cT3a, assintomático. Qual exame de estadiamento é mais indicado para avaliar metástases ósseas?",
    options: [
      "Radiografia de tórax.",
      "Cintilografia óssea ou PSMA-PET.",
      "Ultrassom de abdome total.",
      "Cistoscopia.",
      "Teste de gravidez."
    ],
    answer: 1,
    comment: "PSA > 20, Gleason 8–10 e estágio T3 configuram alto risco, com indicação de estadiamento ósseo por cintilografia ou PSMA-PET, além de avaliação linfonodal. Radiografia de tórax, ultrassom abdominal e cistoscopia não estadiiam metástases ósseas. A escolha do método depende da disponibilidade e do contexto.",
    source: "EAU Prostate Cancer; NCCN."
  },
  {
    id: "q-onc-05", topicId: "top-onc-17", area: "onc", difficulty: 1,
    stem: "Homem de 62 anos, tabagista, apresenta hematúria macroscópica indolor. Qual é o diagnóstico que deve ser prioritariamente investigado?",
    options: [
      "Câncer de bexiga.",
      "Litíase ureteral.",
      "Prostatite aguda.",
      "Epididimite.",
      "Torção testicular."
    ],
    answer: 0,
    comment: "Hematúria macroscópica indolor em tabagista é a apresentação clássica do câncer de bexiga. A investigação inclui cistoscopia e TC urográfica. Litíase pode causar hematúria, mas costuma doer; prostatite e epididimite têm sintomas infecciosos; torção não cursa com hematúria. Não atribua o sangramento a ITU sem reavaliar.",
    source: "EAU NMIBC; AUA Bladder Cancer Guideline."
  },
  {
    id: "q-onc-06", topicId: "top-onc-17", area: "onc", difficulty: 2,
    stem: "Paciente com carcinoma in situ (CIS) de bexiga, alto grau, após RTU completa. Qual é o tratamento adjuvante mais adequado?",
    options: [
      "Observação apenas.",
      "BCG intravesical.",
      "Antibiótico por 14 dias.",
      "Nefrectomia parcial.",
      "Radioterapia pélvica isolada."
    ],
    answer: 1,
    comment: "CIS é lesão de alto grau e alto risco de progressão; o tratamento padrão é BCG intravesical após RTU completa. Observação é inadequada; antibiótico não trata neoplasia; nefrectomia é para tumor renal; radioterapia pélvica isolada não é tratamento padrão de CIS. Falha de BCG em alto risco pode indicar cistectomia.",
    source: "EAU NMIBC; AUA Bladder Cancer Guideline."
  },
  {
    id: "q-onc-07", topicId: "top-onc-17", area: "onc", difficulty: 2,
    stem: "Homem de 60 anos com tumor urotelial de bexiga invadindo a muscular (T2), função renal adequada e bom performance. Qual é a estratégia padrão?",
    options: [
      "Apenas RTU e seguimento.",
      "Quimioterapia neoadjuvante à base de cisplatina seguida de cistectomia radical.",
      "BCG intravesical isolado.",
      "Antibiótico e observação.",
      "Nefrectomia parcial."
    ],
    answer: 1,
    comment: "Tumor músculo-invasivo (T2+) em candidato a cisplatina deve receber quimioterapia neoadjuvante e cistectomia radical com linfadenectomia. RTU isolada é insuficiente; BCG é para NMIBC; antibiótico não trata câncer; nefrectomia parcial é para tumor renal. Alternativa em não candidatos à cirurgia é a terapia trimodal.",
    source: "EAU MIBC; AUA Bladder Cancer Guideline."
  },
  {
    id: "q-onc-08", topicId: "top-onc-18", area: "onc", difficulty: 2,
    stem: "Homem de 55 anos com massa renal de células claras apresenta hipercalcemia, policitemia e hipertensão. Qual mecanismo explica esses achados?",
    options: [
      "Metástases hepáticas produtoras de insulina.",
      "Síndromes paraneoplásicas por PTHrP, eritropoetina e renina.",
      "Infecção crônica por Proteus.",
      "Deficiência de vitamina D exclusivamente dietética.",
      "Hipocalciúria familiar."
    ],
    answer: 1,
    comment: "O carcinoma renal pode secretar PTHrP (hipercalcemia), eritropoetina (policitemia) e renina (hipertensão), entre outras substâncias. Não são metástases hepáticas produtoras de insulina; Proteus associa-se a estruvita; deficiência de vitamina D não explica o conjunto; hipocalciúria familiar é outra doença. A síndrome de Stauffer também pode ocorrer.",
    source: "EAU Renal Cell Carcinoma; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-onc-09", topicId: "top-onc-18", area: "onc", difficulty: 1,
    stem: "TC de abdome mostra lesão renal de 5 cm com densidade negativa (gordura macroscópica) em paciente com esclerose tuberosa. Qual é o diagnóstico mais provável?",
    options: [
      "Carcinoma de células claras.",
      "Angiomiolipoma.",
      "Cistina renal.",
      "Abscesso renal.",
      "Tumor urotelial."
    ],
    answer: 1,
    comment: "Gordura macroscópica em massa renal é característica do angiomiolipoma, especialmente em esclerose tuberosa. Tumores > 4 cm têm risco de sangramento (Wunderlich) e podem ser tratados com embolização ou cirurgia preservadora. Carcinoma de células claras não contém gordura macroscópica; cistina é cálculo; abscesso tem pus e inflamação; tumor urotelial é do sistema coletor.",
    source: "EAU Renal Cell Carcinoma; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-onc-10", topicId: "top-onc-19", area: "onc", difficulty: 1,
    stem: "Homem de 25 anos com massa testicular indolor apresenta AFP muito elevada e hCG normal. Qual conclusão é mais adequada?",
    options: [
      "Trata-se certamente de seminoma puro.",
      "A elevação de AFP sugere componente de tumor de saco vitelino/não seminoma.",
      "A AFP não tem relação com tumores testiculares.",
      "O diagnóstico é epididimite crônica.",
      "Deve-se iniciar antibiótico antes da cirurgia."
    ],
    answer: 1,
    comment: "AFP eleva-se no tumor de saco vitelino e em alguns não seminomas; seminoma puro não produz AFP. A conduta é orquiectomia inguinal radical com marcação de marcadores e estadiamento. AFP não é marcador de epididimite; antibiótico não substitui cirurgia. hCG normal não exclui não seminoma.",
    source: "EAU Testicular Cancer; NCCN."
  },

  {
    id: "q-and-01", topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "Adolescente de 16 anos com dor testicular súbita há 3 horas, náuseas, testículo elevado e reflexo cremastérico ausente. Qual é a conduta mais adequada?",
    options: [
      "Analgesia e retorno ambulatorial.",
      "Exploração escrotal urgente com detorção e orquidopexia, se viável, e fixação contralateral.",
      "Aguardar Doppler normal para operar.",
      "Antibiótico por 14 dias.",
      "Radioterapia testicular."
    ],
    answer: 1,
    comment: "O quadro é de torção testicular, emergência cirúrgica. A janela ideal é < 6 horas; não se atrasa a cirurgia por imagem quando a suspeita é alta. A conduta é detorção e orquidopexia, com fixação contralateral pela anomalia bilateral. Analgesia isolada, antibiótico e radioterapia não tratam a isquemia.",
    source: "EAU Sexual and Reproductive Health; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-and-02", topicId: "top-and-20", area: "and", difficulty: 2,
    stem: "Qual achado clínico favorece torção testicular em vez de epididimite?",
    options: [
      "Alívio da dor com elevação testicular.",
      "Reflexo cremastérico ausente e testículo elevado.",
      "Febre alta e corrimento uretral.",
      "Início gradual da dor ao longo de dias.",
      "Dor localizada apenas no epidídimo."
    ],
    answer: 1,
    comment: "Reflexo cremastérico ausente e testículo elevado/horizontalizado favorecem torção. O alívio com elevação (Prehn positivo) e a dor localizada no epidídimo favorecem epididimite. Febre e corrimento apontam para infecção, mas não excluem torção. Na dúvida, a exploração cirúrgica é mais segura.",
    source: "Campbell-Walsh-Wein Urology; EAU."
  },
  {
    id: "q-and-03", topicId: "top-and-21", area: "and", difficulty: 2,
    stem: "Qual conjunto de valores está dentro dos critérios de referência da OMS para espermograma?",
    options: [
      "Volume 0,8 mL; concentração 10 milhões/mL; motilidade progressiva 20%.",
      "Volume 1,5 mL; concentração 20 milhões/mL; motilidade progressiva 40%; morfologia 5%.",
      "Volume 0,5 mL; concentração 5 milhões/mL; motilidade 10%.",
      "Volume 2 mL; concentração 2 milhões/mL; morfologia 1%.",
      "Volume 1 mL; concentração 15 milhões/mL; motilidade 25%."
    ],
    answer: 1,
    comment: "Referências da OMS (6.ª ed.): volume ≥ 1,4 mL; concentração ≥ 16 milhões/mL; total ≥ 39 milhões; motilidade progressiva ≥ 30%; morfologia ≥ 4%. A opção B atende a todos. As demais têm volume, concentração, motilidade ou morfologia abaixo do corte. Um único exame alterado deve ser repetido.",
    source: "WHO Manual for the Examination of Human Semen, 6. ed."
  },
  {
    id: "q-and-04", topicId: "top-and-21", area: "and", difficulty: 3,
    stem: "Homem com azoospermia, volume ejaculado de 0,8 mL, pH ácido e ausência de frutose. Qual é a hipótese mais provável?",
    options: [
      "Hipogonadismo hipogonadotrófico.",
      "Obstrução ejaculatória ou agenesia de ductos deferentes (CBAVD).",
      "Varicocele bilateral.",
      "Câncer de testículo.",
      "Priapismo."
    ],
    answer: 1,
    comment: "Azoospermia com volume baixo, pH ácido e ausência de frutose sugere obstrução ejaculatória ou agenesia bilateral de ductos deferentes, muitas vezes associada a mutações CFTR. Hipogonadismo central não explica a ausência de frutose; varicocele não causa esse padrão; câncer e priapismo não são causas de azoospermia obstrutiva. Avaliar com ultrassom transretal e CFTR.",
    source: "AUA/ASRM Male Infertility Guideline; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-and-05", topicId: "top-and-21", area: "and", difficulty: 1,
    stem: "Por que a varicocele é mais comum à esquerda?",
    options: [
      "A veia gonadal esquerda drena em ângulo reto na veia renal esquerda e é mais longa.",
      "O testículo esquerdo é sempre maior.",
      "A artéria testicular esquerda nasce da femoral.",
      "O epidídimo esquerdo não drena linfa.",
      "A uretra esquerda é mais curta."
    ],
    answer: 0,
    comment: "A veia gonadal esquerda é mais longa, drena em ângulo reto na veia renal esquerda e sofre maior pressão hidrostática, favorecendo refluxo e varicocele. Não há relação com tamanho testicular, origem femoral da artéria, drenagem linfática do epidídimo ou uretra. Varicocele direita isolada é rara e sugere causa retroperitoneal.",
    source: "Campbell-Walsh-Wein Urology; AUA/ASRM."
  },
  {
    id: "q-and-06", topicId: "top-and-22", area: "and", difficulty: 1,
    stem: "Homem de 62 anos com disfunção erétil pergunta sobre sildenafila. Ele usa dinitrato de isossorbida para angina. Qual é a conduta correta?",
    options: [
      "Prescrever sildenafila em dose baixa.",
      "Não prescrever inibidor da PDE5 devido ao risco de hipotensão grave; discutir alternativas.",
      "Suspender o nitrato sem avisar o cardiologista.",
      "Prescrever sildenafila e nitrato juntos, com monitorização.",
      "Indicar testosterona como substituto."
    ],
    answer: 1,
    comment: "Inibidores da PDE5 são contraindicados com nitratos pelo risco de hipotensão potencialmente fatal. Deve-se discutir alternativas (vacuum, injeções intracavernosas, prótese) e envolver a cardiologia. Dose baixa não elimina o risco; suspender nitrato por conta própria é perigoso; testosterona não substitui o tratamento da disfunção erétil.",
    source: "EAU Sexual and Reproductive Health; AUA."
  },
  {
    id: "q-and-07", topicId: "top-and-22", area: "and", difficulty: 2,
    stem: "Homem de 30 anos apresenta ereção dolorosa e rígida há 5 horas, sem trauma. Qual é a conduta inicial mais adequada?",
    options: [
      "Observar por 24 horas.",
      "Aspiração dos corpos cavernosos e injeção de fenilefrina; shunt se refratário.",
      "Iniciar PDE5i.",
      "Antibiótico por 14 dias.",
      "Radioterapia."
    ],
    answer: 1,
    comment: "Priapismo isquêmico (> 4 h, doloroso, rígido) é emergência: aspirar sangue e injetar fenilefrina; se falhar, shunt cirúrgico. Observar causa fibrose e disfunção erétil permanente; PDE5i não trata priapismo; antibiótico e radioterapia não são indicados. Investigar fármacos e anemia falciforme.",
    source: "AUA Priapism Guideline; EAU."
  },
  {
    id: "q-and-08", topicId: "top-and-23", area: "and", difficulty: 2,
    stem: "Homem de 35 anos com hipogonadismo secundário deseja engravidar. Qual tratamento é mais adequado?",
    options: [
      "Testosterona intramuscular.",
      "hCG ou gonadotrofinas para estimular a espermatogênese.",
      "Finasterida.",
      "Tansulosina.",
      "Radioterapia hipofisária imediata."
    ],
    answer: 1,
    comment: "A testosterona exógena suprime a espermatogênese e não é tratamento de infertilidade. No hipogonadismo secundário com desejo de fertilidade, usar hCG (estimula Leydig) e/ou gonadotrofinas; clomifeno pode ser alternativa selecionada. Finasterida e tansulosina não tratam hipogonadismo; radioterapia não é primeira linha sem tumor definido.",
    source: "EAU Sexual and Reproductive Health; Endocrine Society."
  },

  {
    id: "q-tra-01", topicId: "top-tra-24", area: "tra", difficulty: 2,
    stem: "Homem de 28 anos, vítima de trauma de flanco, está hemodinamicamente estável. TC mostra laceração renal grau III sem extravasamento. Qual é a conduta mais adequada?",
    options: [
      "Nefrectomia imediata.",
      "Tratamento conservador com monitorização, repouso e analgesia.",
      "Exploração cirúrgica de urgência.",
      "Nefrostomia bilateral.",
      "Radioterapia."
    ],
    answer: 1,
    comment: "Trauma renal grau III em paciente estável é manejado conservadoramente, com monitorização, repouso e controle de dor. A cirurgia é reservada para instabilidade, hematoma em expansão ou avulsão do pedículo. Nefrectomia imediata e exploração de rotina não são indicadas; nefrostomia e radioterapia não fazem parte do manejo agudo.",
    source: "EAU Urological Trauma; AUA Urotrauma."
  },
  {
    id: "q-tra-02", topicId: "top-tra-24", area: "tra", difficulty: 2,
    stem: "Paciente no segundo dia pós-histerectomia apresenta dor lombar, febre e aumento de creatinina. Qual é a principal suspeita e o exame indicado?",
    options: [
      "Lesão ureteral iatrogênica; TC urográfica.",
      "Cistite simples; urina tipo 1 apenas.",
      "Torção testicular; Doppler.",
      "Priapismo; gasometria.",
      "Litíase vesical; raio-X simples."
    ],
    answer: 0,
    comment: "Cirurgia pélvica é a principal causa de lesão ureteral iatrogênica. Dor lombar, febre e elevação de creatinina no pós-operatório sugerem obstrução ou fístula urinária; a TC urográfica avalia extravasamento e hidronefrose. Cistite não eleva tanto a creatinina; torção, priapismo e litíase vesical não explicam o quadro. Pode ser necessário stent ou reconstrução.",
    source: "EAU Urological Trauma; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-tra-03", topicId: "top-tra-25", area: "tra", difficulty: 1,
    stem: "Homem de 35 anos com fratura pélvica apresenta sangue no meato uretral, retenção urinária e bexiga palpável. Qual conduta é correta?",
    options: [
      "Passar sonda vesical de demora imediatamente.",
      "Uretrocistografia retrógrada e cistostomia suprapúbica; não cateterizar a uretra.",
      "Nefrostomia percutânea bilateral.",
      "Cistectomia imediata.",
      "Alta com analgésico."
    ],
    answer: 1,
    comment: "Sangue no meato após fratura pélvica sugere lesão de uretra posterior. Não se passa sonda uretral às cegas: risco de falso trajeto e conversão de lesão parcial em completa. A conduta é uretrocistografia retrógrada e cistostomia suprapúbica. Nefrostomia, cistectomia e alta não são adequadas.",
    source: "EAU Urological Trauma."
  },
  {
    id: "q-tra-04", topicId: "top-tra-25", area: "tra", difficulty: 2,
    stem: "Paciente com trauma abdominal e bexiga cheia apresenta dor e rigidez abdominal. TC cistográfica mostra extravasamento de contraste para a cavidade peritoneal. Qual é a conduta?",
    options: [
      "Cateter vesical isolado.",
      "Reparo cirúrgico da bexiga e drenagem.",
      "Antibiótico oral e alta.",
      "Nefrectomia.",
      "Radioterapia pélvica."
    ],
    answer: 1,
    comment: "Ruptura intraperitoneal da bexiga exige reparo cirúrgico e drenagem, pois a urina na cavidade peritoneal causa peritonite e sepse. Ruptura extraperitoneal pode ser manejada com cateter em casos selecionados. Antibiótico isolado, nefrectomia e radioterapia não tratam a lesão. Avaliar lesões associadas.",
    source: "EAU Urological Trauma; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-tra-05", topicId: "top-tra-26", area: "tra", difficulty: 1,
    stem: "Homem de 60 anos, diabético, com dor perineal intensa, febre, crepitação e necrose de pele. Qual é a conduta prioritária?",
    options: [
      "Antibiótico oral e retorno ambulatorial.",
      "Desbridamento cirúrgico imediato e antibiótico de amplo espectro.",
      "Apenas analgesia.",
      "Radioterapia.",
      "Cateterismo vesical isolado."
    ],
    answer: 1,
    comment: "O quadro é Fournier, fasciíte necrosante polimicrobiana. O tratamento é desbridamento cirúrgico imediato e repetido, associado a antibiótico de amplo espectro, ressuscitação e controle glicêmico. Antibiótico isolado não remove tecido necrótico; analgesia, radioterapia e cateter isolado não controlam a infecção. A mortalidade é alta.",
    source: "EAU Urological Infections; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-tra-06", topicId: "top-tra-24", area: "tra", difficulty: 2,
    stem: "Qual é uma indicação absoluta de exploração cirúrgica no trauma renal?",
    options: [
      "Hematúria microscópica isolada.",
      "Instabilidade hemodinâmica persistente com hematoma perirrenal em expansão.",
      "Laceração grau II em paciente estável.",
      "Dor lombar leve.",
      "Creatinina normal."
    ],
    answer: 1,
    comment: "Instabilidade hemodinâmica com hematoma em expansão (ou avulsão do pedículo) é indicação absoluta de exploração. Hematúria microscópica isolada, laceração grau II estável, dor leve e creatinina normal não justificam cirurgia. A maioria dos traumas renais estáveis é tratada conservadoramente.",
    source: "EAU Urological Trauma; AUA Urotrauma."
  },

  {
    id: "q-ped-01", topicId: "top-ped-27", area: "ped", difficulty: 1,
    stem: "Lactente de 9 meses com testículo direito não palpável na bolsa, sem outras alterações. Qual é a conduta mais adequada?",
    options: [
      "Observar até a puberdade.",
      "Orquidopexia até 12–18 meses.",
      "Orquiectomia imediata.",
      "Radioterapia.",
      "Tratar com hCG por seis meses."
    ],
    answer: 1,
    comment: "Criptorquidia não corrigida espontaneamente até 6 meses deve ser operada, idealmente entre 6 e 18 meses (até 12 meses em muitas diretrizes), para reduzir risco de infertilidade e facilitar vigilância de malignidade. Observar até a puberdade é tardio; orquiectomia não é indicada; radioterapia não; hCG tem papel limitado e não substitui a cirurgia.",
    source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-ped-02", topicId: "top-ped-27", area: "ped", difficulty: 1,
    stem: "Criança chega com prepúcio retraído, edema importante da glande e dor. Qual é a conduta imediata?",
    options: [
      "Circuncisão eletiva em 6 meses.",
      "Redução manual da parafimose com analgesia e compressão; cirurgia se falhar.",
      "Antibiótico oral isolado.",
      "Observação por 48 horas.",
      "Cateterismo uretral."
    ],
    answer: 1,
    comment: "Parafimose é emergência: o prepúcio retraído não retorna, causando edema e isquemia. A conduta é redução manual com analgesia e compressão; se falhar, tratamento cirúrgico. Circuncisão eletiva não resolve o episódio agudo; antibiótico isolado não; observação pode levar a necrose; cateterismo não trata parafimose.",
    source: "EAU Paediatric Urology."
  },
  {
    id: "q-ped-03", topicId: "top-ped-27", area: "ped", difficulty: 2,
    stem: "Lactente com aumento escrotal indolor que transilumina e varia de tamanho ao longo do dia. Qual é a hipótese mais provável?",
    options: [
      "Hérnia inguinal encarcerada.",
      "Hidrocele comunicante.",
      "Torção testicular.",
      "Tumor testicular.",
      "Fournier."
    ],
    answer: 1,
    comment: "Hidrocele comunicante decorre da persistência do processo vaginal, transilumina e varia de tamanho (com esforço/choro). Pode associar-se a hérnia inguinal. Hérnia encarcerada é dolorosa e endurecida; torção é aguda e dolorosa; tumor é massa sólida; Fournier é necrose grave. Avaliar cirurgia se persistente.",
    source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-ped-04", topicId: "top-ped-28", area: "ped", difficulty: 2,
    stem: "Qual exame confirma e classifica o refluxo vesicoureteral em uma criança com ITU febril recorrente?",
    options: [
      "Ultrassom renal isolado.",
      "Uretrocistografia miccional (VCUG).",
      "TC de tórax.",
      "Ressonância de crânio.",
      "Dosagem de PSA."
    ],
    answer: 1,
    comment: "A VCUG é o exame que confirma refluxo e classifica em graus I–V, além de avaliar válvula de uretra posterior em meninos. Ultrassom mostra dilatação, mas não confirma refluxo; TC de tórax, RM de crânio e PSA não têm relação. O manejo depende do grau, infecções, cicatrizes e disfunção vesical.",
    source: "EAU Paediatric Urology."
  },
  {
    id: "q-ped-05", topicId: "top-ped-28", area: "ped", difficulty: 2,
    stem: "Recém-nascido do sexo masculino com hidronefrose bilateral, bexiga espessada e jato urinário fraco. A uretrocistografia mostra dilatação da uretra posterior com transição abrupta. Qual é a conduta inicial?",
    options: [
      "Cateterismo vesical urgente, antibiótico e avaliação para ablação endoscópica.",
      "Observação domiciliar.",
      "Nefrectomia bilateral imediata.",
      "Radioterapia.",
      "Apenas circuncisão."
    ],
    answer: 0,
    comment: "O quadro é válvula de uretra posterior, obstrução congênita grave. A conduta inicial é cateterismo vesical para desobstruir, antibiótico se infecção, correção de distúrbios e posterior ablação endoscópica. Observação, nefrectomia, radioterapia e circuncisão não tratam a obstrução. Seguimento renal prolongado é necessário.",
    source: "EAU Paediatric Urology."
  },
  {
    id: "q-ped-06", topicId: "top-ped-28", area: "ped", difficulty: 1,
    stem: "Criança de 7 anos com enurese noturna primária isolada, sem sintomas diurnos. Qual é a abordagem inicial mais adequada?",
    options: [
      "Investigar com RM de crânio imediatamente.",
      "Medidas comportamentais, alarme de enurese ou desmopressina; investigar se houver sintomas diurnos.",
      "Antibiótico profilático por 6 meses.",
      "Cistoscopia de rotina.",
      "Restringir totalmente líquidos por 24 horas."
    ],
    answer: 1,
    comment: "Enurese noturna primária sem sintomas diurnos é comum e tem alta taxa de resolução espontânea. A abordagem inicial inclui medidas comportamentais, alarme e/ou desmopressina. RM, antibiótico, cistoscopia e restrição hídrica extrema não são indicados de rotina; sintomas diurnos, infecção ou enurese secundária exigem investigação.",
    source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
  }
);
