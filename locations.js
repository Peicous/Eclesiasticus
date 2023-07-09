const locations = [
	{
		name: "Castell de Fornils",
		type: "desconegut", 
		coordinates: [42.0201463, 2.5149485],
		description: [
			"<h2><b>Castell de Fornils</b></h2>",
			"Queda pendent d'explorar, l'existència de la ubicació ha estat descoberta per en <a>Carles Llauger</a>"
		]
	},
	{
		type: "area",
		radi: 500,
		coordinates: [42.0201463, 2.5149485]
	},
	{
		name: "Santa Anna de Bescanó",
		type: "iclesia",
		coordinates: [41.96577085, 2.74984326],
		description: [
			"<h2>Santa Anna de Bescanó</h2>",
			"<small>Divisió administrativa: Montfullà, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona - Salt, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita de la vila de Montfullà, al terme municipal de Bescanó. Es creu que va ser construïda al segle <span style='font-variant: small-caps'>xvii</span>."
		]
	},
	{
		name: "Sant Llorenç de Bescanó",
		type: "parroquia",
		coordinates: [41.9654651, 2.74271562],
		description: [
			"<h2>Sant Llorenç de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial de la vila de Bescanó, al terme municipal homònim. Se'n té constància des del 1058."
		]
	},
	{
		name: "Sant Martí de Ca n'Amat Gros",
		type: "iclesia",
		coordinates: [41.96987575, 2.6975462],
		description: [
			"<h2>Sant Martí de Ca n'Amat Gros</h2>",
			"<small>Divisió administrativa: Vilanna, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Mateu de Vilanna, Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Capella del mas Amat Gros, al terme municipal de Bescanó. Construïda al segle <span style='font-variant: small-caps'>x</span>."
		]
	},
	{
		name: "Santa Margarida de Bescanó",
		type: "iclesia",
		coordinates: [41.961952, 2.7294616],
		description: [
			"<h2>Santa Margarida de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Llorenç de Bescanó, Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Ermita de la vila de Bescanó, al terme municipal homònim. Se'n té constància des del 1400."
		]
	},
	{
		name: "Santa Maria Assumpta de Bescanó",
		type: "iclesia",
		coordinates: [41.96556325, 2.73945117],
		description: [
			"<h2>Santa Maria Assumpta de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Llorenç de Bescanó, Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial de la vila de Bescanó, al terme municipal homònim. Construïda el 1959."
		]
	},
	{
		name: "Sant Sebastià de Bescanó",
		type: "iclesia",
		coordinates: [41.9665699, 2.74783833],
		description: [
			"<h2>Sant Sebastià de Bescanó</h2>",
			"<small>Divisió administrativa: Bescanó, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Llorenç de Bescanó, Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Capella de la vila de Bescanó, al terme municipal homònim. Inscripció del 1610."
		]
	},
	{
		name: "Sant Andreu d'Estanyol",
		type: "parroquia",
		coordinates: [41.94147005, 2.74083832],
		description: [
			"<h2>Sant Andreu d'Estanyol</h2>",
			"<small>Divisió administrativa: Estanyol, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial del poble d'Estanyol, al terme municipal de Bescanó. Se'n té constància des del 888."
		]
	},
	{
		name: "Sant Pere de Montfullà",
		type: "parroquia",
		coordinates: [41.9683824, 2.75958883],
		description: [
			"<h2>Sant Pere de Montfullà</h2>",
			"<small>Divisió administrativa: Montfullà, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat de Girona - Salt, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial del poble de Montfullà, al terme municipal de Bescanó. Se'n té constància des del 882."
		]
	},
	{
		name: "Sant Bartomeu de Trullars",
		type: "iclesia",
		coordinates: [41.9366246, 2.73506882],
		description: [
			"<h2>Sant Bartomeu de Trullars</h2>",
			"<small>Divisió administrativa: Estanyol, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Parròquia de Sant Andreu d'Estanyol, Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Capella del llogarret de Trullars, al terme municipal de Bescanó. Se'n té constància des del 1118, però es creu d'origen preromànic."
		]
	},
	{
		name: "Sant Mateu de Vilanna",
		type: "parroquia",
		coordinates: [41.97590025, 2.70329996],
		description: [
			"<h2>Sant Mateu de Vilanna</h2>",
			"<small>Divisió administrativa: Vilanna, Bescanó, Gironès, Girona, Catalunya</small><br/>",
			"<small>Divisió eclesiàstica: Arxiprestat del Ter - Brugent, Bisbat de Girona, Província eclesiàstica Tarraconense</small><br/><br/>",
			"Església parroquial del poble de Vilanna, al terme municipal de Bescanó. Se'n té constància des del 899."
		]
	},
	{
		name: "Cementiri nou d'Anglès",
		type: "cementiri",
		coordinates: [41.9442417, 2.6428552],
		description: [
			"<h2>Cementiri nou d'Anglès</h2>",
			"<small>Divisió administrativa: Anglès, Gironès, Girona, Catalunya</small><br/><br/>",
			"Cementiri nou de la vila d'Anglès, al terme municipal homònim. Construït durant la dècada de 1980 per la falta de capacitat i la impossibilitat d'ampliació del vell."
		]
	},
	{
		name: "Cementiri vell d'Anglès",
		type: "cementiri",
		coordinates: [41.9547187, 2.6359949],
		description: [
			"<h2>Cementiri vell d'Anglès</h2>",
			"<small>Divisió administrativa: Anglès, Anglès, Gironès, Girona, Catalunya</small><br/><br/>",
			"Cementiri vell de la vila d'Anglès, al terme municipal homònim. Construït durant la dècada de 1910-1920 per la impossibilitat d'ampliació i les poques condicions higièniques de l'antic cementiri parroquial."
		]
	}
]