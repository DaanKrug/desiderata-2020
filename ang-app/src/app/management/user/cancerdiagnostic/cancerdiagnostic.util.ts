const CancerDiagnosticUtil = {
	getTypes(){
		return [
			{value: 1, label: 'Linfoma Hodgkins'},
			{value: 2, label: 'Linfoma Não Hodgkins'},
			{value: 3, label: 'Osteossarcoma'},
			{value: 4, label: 'Sarcoma de Ewing'},
			{value: 5, label: 'Hepatoblastoma'},
			{value: 6, label: 'Neuroblastoma'},
			{value: 7, label: 'Tumor de Wilms'},
			{value: 8, label: 'Rabdomiossarcoma'},
			{value: 9, label: 'Sarcoma não-rabdóide'},
			{value: 10, label: 'Tumor testicular'},
			{value: 11, label: 'Retinoblastoma'},
			{value: 12, label: 'Tumor ovariano'},
			{value: 13, label: 'Ependimoma'},
			{value: 14, label: 'Meduloblastoma e outros tumores embrionários de SNC'},
		];
	},
	getTypesLevel1(type){
		if(type === 1){
			return [
				{value: 1, label: 'Estádio I', info: 'Envolvimento de uma única região linfonodal. Ou Envolvimento de um único órgão ou local extralinfático sem envolvimento linfonodal.'},
				{value: 2, label: 'Estádio II', info: 'Envolvimento de duas ou mais regiões linfonodais do MESMO lado (acima ou abaixo) do diafragma. Ou Envolvimento localizado de um único órgão extralinfonodal ou um local associado com linfonodos regionais com ou sem envolvimento de outras regiões linfonodais do MESMO lado (abaixo ou acima) do diafragma.'},
				{value: 3, label: 'Estádio III', info: 'Envolvimento de regiões linfonodais em AMBOS os lados do diafragma.'},
				{value: 4, label: 'Estádio IV', info: 'Envolvimento difuso ou disseminado de um ou mais órgãos extralinfáticos com ou sem envolvimento linfonodal associado. Ou Envolvimento isolado de órgão extralinfático na ausência de envolvimento linfonodal adjacente, mas associado com doença em locais à distância. Ou Qualquer envolvimento do fígado, medula óssea, pulmões (exceto por contiguidade) ou líquor.'},
			];
		}
		if(type === 2){
			return [
				{value: 'L', label: 'Limitado', info: 'Sem comprometimento de SNC ou medula óssea.'},
				{value: 'A', label: 'Avançado', info: 'Envolvimento liquórico e/ou medula óssea.'},
			];
		}
		if(type === 3){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
				{value: 'M', label: 'Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 4){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
				{value: 'M', label: 'Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 5){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
				{value: 'M', label: 'Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 6){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor localizado, não envolvendo estruturas vitais, e confinado em um único compartimento corporal.'},
				{value: 'LR', label: 'Localmente Avançado', info: 'Tumor localmente avançado com disseminação.'},
				{value: 'M', label: 'Metastático', info: 'Doença metastática à distância (exceto para o estadiamento MS).'},
				{value: 'MS', label: 'Metastático S', info: 'MS - Doença metastática confinada à pele, fígado e/ou medula óssea em menos de 18 meses (547 dias).'},
			];
		}
		if(type === 7){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor confinado à área de origem.'},
				{value: 'M', label: 'Metastático', info: 'Presença de metástases à distância ao diagnóstico.'},
			];
		}
		if(type === 8){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
				{value: 'M', label: 'Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 9){
			return [
				{value: 'L', label: 'Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
				{value: 'M', label: 'Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 10){
			return [
				{value: 'L', label: 'Localizado', info: 'Localizado Tumor confinado ao testículo.'},
				{value: 'R', label: 'Regional', info: 'Regional Extensão do tumor para os seguintes linfonodos regionais: » Intercavoaórtico. » Paraórtico (periaórtico). » Paracaval. » Pré-aórtico. » Pré-caval. » Retroaórtico. » Ao longo do cordão espermático.'},
				{value: 'M', label: 'Metastático', info: 'Metastático Presença de metástases à distância.'},
			];
		}
		if(type === 11){
			return [
				{value: 'L', label: 'Localizado', info: 'Localizado Intraocular.'},
				{value: 'R', label: 'Regional', info: 'Regional Extensão orbital ou linfonodos regionais.'},
				{value: 'M', label: 'Metastático', info: 'Metastático Presença de metástases à distância.'},
			];
		}
		if(type === 12){
			return [
				{value: 'L', label: 'Localizado', info: 'Localizado Tumor confinado ao ovário.'},
				{value: 'R', label: 'Regional', info: 'Regional Tumor envolvendo um ou ambos os ovários, com extensão pélvica e/ou disseminação peritonial fora da pélvis e/ou linfonodos retroperitoneais.'},
				{value: 'M', label: 'Metastático', info: 'Metastático Presença de metástases à distância, excluindo metástases para o peritônio.'},
			];
		}
		if(type === 13){
			return [
				{value: 'L', label: 'Localizado', info: 'Localizado Doença localizada.'},
				{value: 'M', label: 'Metastático', info: 'Metastático Doença além do local primário (isto é: outros locais no cérebro ou canal medular, células tumorais no líquor ou metástases à distância)'},
			];
		}
		if(type === 14){
			return [
				{value: 'L', label: 'Localizado', info: 'Localizado Doença localizada.'},
				{value: 'M', label: 'Metastático', info: 'Metastático Doença além do local primário (isto é: outros locais no cérebro ou canal medular, células tumorais no líquor ou metástases à distância).'},
			];
		}
	},
	getTypesLevel2(type,level1){
		if(type === 1){
			return [
				{value: 'A', label: 'Ausência de sintomas relatados', info: 'Ausência de sintomas relatados no prontuário médico'},
				{value: 'B', label: 'Presença de sintomas relatados', info: 'Febre inexplicada com temperatura acima de 38º graus Celsius OU Suores noturnos. Suores abundantes (exemplo: com necessidade de trocar o lençol da cama) Ou Perda de peso inexplicada de mais de 10% do peso corporal em 6 meses antes do diagnóstico.'},
			];
		}
		if(type === 2 && level1 === 'A'){
			return [
				{value: 4, label: 'Estádio IV', info: 'Envolvimento liquórico e/ou medula óssea.'},
			];
		}
		if(type === 2){
			return [
				{value: 1, label: 'Estádio I', info: 'Envolvimento de única massa tumoral ou área linfonodal, excluindo abdômen e mediastino.'},
				{value: 2, label: 'Estádio II', info: 'Um único tumor (extranodal) com envolvimento de linfonodos regionais. Ou Duas ou mais áreas nodais do MESMO lado do diafragma (abaixo ou acima). Ou Dois ou mais tumores (extranodais), com ou sem envolvimento de linfonodos regionais, do MESMO lado do diafragma (acima ou abaixo). Ou Tumor primário gastrointestinal completamente ressecado, com ou sem envolvimento de linfonodos mesentéricos. Ou Tumores (extranodais) ou áreas nodais em lados OPOSTOS (acima e abaixo) do diafragma. Ou Qualquer tumor primário intratorácico (mediastinal, hilar, pulmonar, pleural ou tímico). Ou Tumor primário intra-abdominal extenso (irressecável).*'},
				{value: 3, label: 'Estádio III', info: 'Qualquer tumor paraespinhal ou epidural. independente de outras lesões.'}
			];
		}
		if(type === 3 && level1 == 'L'){
			return [
				{value: 'L', label: 'Estádio Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
			];
		}
		if(type === 3 && level1 == 'M'){
			return [
				{value: 'M', label: 'Estádio Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 4 && level1 == 'L'){
			return [
				{value: 'L', label: 'Estádio Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
			];
		}
		if(type === 4 && level1 == 'M'){
			return [
				{value: 'M', label: 'Estádio Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 5 && level1 == 'L'){
			return [
				{value: 'L', label: 'Estádio Localizado', info: 'Tumor confinado à área de origem incluindo linfonodos regionais.'},
			];
		}
		if(type === 5 && level1 == 'M'){
			return [
				{value: 'M', label: 'Estádio Metastático', info: 'Presença de metástases à distância.'},
			];
		}
		if(type === 6 && level1 == 'L'){
			return [
				{value: 'L', label: 'Estádio L1', info: 'Estádio L1 Tumor localizado, não envolvendo estruturas vitais como definido pela FRDI, e confinado em um único compartimento corpóreo, pescoço, tórax, abdômen ou pélvis. Uma extensão intraespinal do tumor que não apresente os critérios definidos no FRDI é consistente ao Estádio L1.'},
			];
		}
		if(type === 6 && level1 == 'LR'){
			return [
				{value: 'LR', label: 'Estádio L2', info: 'Estádio L2 Tumor localmente avançado com uma ou mais FRDI. O tumor pode ser ipsilateralmente contiguo dentro de compartimentos corporais (exemplo: tumor abdominal localizado no lado esquerdo com envolvimento pulmonar, ósseo ou pleural do mesmo lado deve ser considerado Estádio L2). Todavia, um tumor do lado esquerdo com envolvimento pulmonar, ósseo ou pleural do lado direito (ou vice-versa) é definido metastático.'},
			];
		}
		if(type === 6 && level1 == 'M'){
			return [
				{value: 'M', label: 'Estádio M', info: 'Estádio M Doença metastática à distância (exemplos: não contigua com tumor primário) exceto quando definido como MS. Envolvimento linfonodal não regional (à distância). Todavia, se o tumor estiver localizado no abdômen superior com aumento de linfonodos mediastinais ou se um tumor pélvico apresentar envolvimento de linfonodos inguinais, estes são considerados como doença localmente avançada. A presença de ascite e/ou derrame pleural, inclusive com células malignas, não constitui doença metastática, a não ser que estejam em um compartimento corporal distante do tumor primário.'},
			];
		}
		if(type === 6 && level1 == 'MS'){
			return [
				{value: 'MS', label: 'Estádio MS', info: 'Estádio MS Doença metastática confinada à pele, fígado e/ou medula óssea em menos de 18 meses (547 dias). Cintilografia MIBG tem que ser negativa para osso e medula óssea.'},
			];
		}
		if(type === 7 && level1 == 'M'){
			return [
				{value: '4', label: 'Estádio IV', info: 'Estádio IV Presença de metástases hematogênicas ou disseminação além do abdômen, ao diagnóstico.'},
			];
		}
		if(type === 7){
			return [
				{value: '1', label: 'Estádio I', info: 'Estádio I Tumor limitado ao rim e completamente ressecado: » Cápsula renal intacta, não penetrada pelo tumor. » Sem invasão tumoral em veias ou vasos linfáticos do seio renal. » Sem metástases linfonodais ou hematogênicas. » Sem biópsia prévia. » Margens negativas.'},
				{value: '2', label: 'Estádio II', info: 'Estádio II Tumor se estende além do rim, mas é completamente ressecado: » Tumor penetra a capsula renal. » Tumor em vasos linfáticos ou veias do seio renal. » Tumor na veia renal sem envolvimento de margens. » Ausência de metástases em linfonodos ou à distância. » Margens negativas.'},
				{value: '3', label: 'Estádio III', info: 'Estádio III Tumor residual ou metástases não-hematogênicas confinadas ao abdômen: » Linfonodos abdominais envolvidos. » Contaminação peritoneal ou implante tumoral. » Ruptura do tumor antes ou durante a cirurgia. » Tumor macroscópico no abdômen. » Biópsia do tumor (incluindo aspiração por agulha fina) antes de remover o rim. » Ressecção de margens envolvidas por tumor.'},
				{value: '1y', label: 'Estádio y-I', info: 'Estádio y-I Tumor limitado ao rim e completamente ressecado: » Cápsula renal pode ser infiltrada pelo tumor, mas o tumor não alcança a superfície externa. » Tumor pode se projetar ou aumentar de tamanho dentro do sistema pélvico ou ureter, mas não se infiltra. » Vasos do seio renal não envolvidos. '},
				{value: '2y', label: 'Estádio y-II', info: 'Estádio y-II Tumor se estende além do rim, mas é completamente ressecado: » Tumor penetra a cápsula renal na gordura peri-renal. » Tumor infiltra o seio renal e/ou invade vasos sanguíneos e linfáticos fora do parênquima renal, mas é completamente ressecado.'},
				{value: '3y', label: 'Estádio y-III', info: 'Estádio y-III Tumor com ressecção incompleta (extensão macroscópica ou microscópica além das margens de ressecção). » Linfonodos abdominais envolvidos, incluindo tumor necrótico ou mudanças induzidas pela quimioterapia. » Ruptura do tumor antes ou durante a cirurgia. » Tumor penetrando a superfície peritoneal. » Trombo tumoral presente na margem de ressecção. » Biópsia cirúrgica antes da ressecção (não inclui biópsia por agulha).'},
			];
		}
		if(type === 8 && level1 == 'M'){
			return [
				{value: 4, label: 'Estádio IV', info: 'Estádio IV Qualquer localização anatômica + Qualquer T, qualquer N, M1.'},
			];
		}
		if(type === 8){
			return [
				{value: 1, label: 'Estádio I', info: 'Estádio I Localizações anatômicas favoráveis: órbita, cabeça e pescoço (excluindo tumores parameníngeos) e localizações geniturinárias (excluindo bexiga e próstata) + qualquer T, qualquer N, M0.'},
				{value: 2, label: 'Estádio II', info: 'Estádio II Localizações anatômicas desfavoráveis + T1a, T2a, N0, M0.'},
				{value: 3, label: 'Estádio III', info: 'Estádio III Localizações anatômicas desfavoráveis + T1a, T2a, N1, M0 T1b, T2b, qualquer N, M0'},
			];
		}
		if(type === 9 && level1 == 'M'){
			return [
				{value: 4, label: 'Estádio IV', info: 'Estádio IV Qualquer T, qualquer N, M1 Qualquer G (G1, G2, G3 ou GX).'},
			];
		}
		if(type === 9){
			return [
				{value: 1, label: 'Estádio I', info: 'Estádio I Qualquer T, N0, M0 G1 ou Gx.'},
				{value: 2, label: 'Estádio II', info: 'Estádio II T1, N0, M0 G2 ou G3.'},
				{value: 3, label: 'Estádio III', info: 'Estádio III T2/T3/T4, N0, M0 G2 ou G3. OU Qualquer T, N1, M0 Qualquer G (G1, G2, G3 ou GX).'},
			];
		}
		if(type === 10 && level1 == 'L'){
			return [
				{value: 'L', label: 'Estádio I', info: 'Estádio I Qualquer T. N0. M0.'},
			];
		}
		if(type === 10 && level1 == 'R'){
			return [
				{value: 'R', label: 'Estádio II', info: 'Estádio II Qualquer T. N1. N2. N3. M0.'},
			];
		}
		if(type === 10 && level1 == 'M'){
			return [
				{value: 'M', label: 'Estádio III', info: 'Estádio III Qualquer T. Qualquer N. M1.'},
			];
		}
		if(type === 11 && level1 == 'L'){
			return [
				{value: '0', label: 'Estádio 0', info: 'Estádio 0 Tumor confinado ao globo. A enucleação ainda não foi realizada (paciente com tratamento “conservador” com terapia focal ou quimioterapia).'},
				{value: '1', label: 'Estádio I', info: 'Estádio I Enucleação com margens negativas.'},
				{value: '2', label: 'Estádio II', info: 'Estádio II Enucleação com doença residual microscópica.'},
			];
		}
		if(type === 11 && level1 == 'R'){
			return [
				{value: '3', label: 'Estádio III', info: 'Estádio III Extensão regional: envolvimento da órbita e/ou extensão linfonodal pré-auricular ou cervical.'},
			];
		}
		if(type === 11 && level1 == 'M'){
			return [
				{value: '4', label: 'Estádio IV', info: 'Estádio IV Presença de metástases à distância.'},
			];
		}
		if(type === 12 && level1 == 'L'){
			return [
				{value: 1, label: 'Estádio I', info: 'Estádio I Tumor confinado ao ovário (um ou ambos).'},
			];
		}
		if(type === 12 && level1 == 'R'){
			return [
				{value: 2, label: 'Estádio II', info: 'Estádio II Tumor envolvendo um ou ambos os ovários, com extensão pélvica.'},
				{value: 3, label: 'Estádio III', info: 'Estádio III Tumor envolvendo um ou ambos os ovários com confirmação citológica ou histológica de disseminação para o peritônio fora da pélvis e/ou metástases para os linfonodos retroperitoneais.'},
			];
		}
		if(type === 12 && level1 == 'M'){
			return [
				{value: 4, label: 'Estádio IV', info: 'Estádio IV Presença de metástases à distância, excluindo metástases para o peritônio.'},
			];
		}
		if(type === 13 && level1 == 'L'){
			return [
				{value: 'M0', label: 'Estádio M0', info: 'M0 Sem doença visível na ressonância magnética (RNM) além do local primário e sem células tumorais no líquor.'},
			];
		}
		if(type === 13 && level1 == 'M'){
			return [
				{value: 'M1', label: 'Estádio M1', info: 'M1 Células tumorais no líquor.'},
				{value: 'M2', label: 'Estádio M2', info: 'M2 Metástases visíveis no cérebro.'},
				{value: 'M3', label: 'Estádio M3', info: 'M3 Metástases visíveis no canal medular ou metástases visíveis na junção cérvico-medular.'},
				{value: 'M4', label: 'Estádio M4', info: 'M4 Metástases fora do SNC.'},
			];
		}
		if(type === 14 && level1 == 'L'){
			return [
				{value: 'M0', label: 'Estádio M0', info: 'M0 Sem doença visível na ressonância magnética (RNM) além do local primário e sem células tumorais no líquor.'},
			];
		}
		if(type === 14 && level1 == 'M'){
			return [
				{value: 'M1', label: 'Estádio M1', info: 'M1 Células tumorais no líquor.'},
				{value: 'M2', label: 'Estádio M2', info: 'M2 Metástases visíveis no cérebro.'},
				{value: 'M3', label: 'Estádio M3', info: 'M3 Metástases visíveis no canal medular ou metástases visíveis na junção cérvico-medular.'},
				{value: 'M4', label: 'Estádio M4', info: 'M4 Metástases fora do SNC.'},
			];
		}
	},
};

export default CancerDiagnosticUtil;


