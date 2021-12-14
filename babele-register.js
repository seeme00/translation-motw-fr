var tag_list = {
	"1-harm": "1-Dégât",
	"2-harm": "2-Dégâts",
	"3-harm": "3-Dégâts",
	"4-harm": "4-Dégâts",
	"loud": "Bruyant",
	"hand": "Allonge",
	"far": "Loin",
	"close": "Proche",
	"messy": "Sanglant",
	"reload": "Rechargement",
	"magic": "Magique",
	"silver": "Argent",
	"iron": "Fer",
	"fire": "Feu",
	"heavy": "Lourd",
	"volatil": "Volatile",
	"intimate": "Personnel",
	"slow": "Lent",
	"wooden": "Bois",
	"holy": "Béni",
	"quick": "Rapide",
	"innocuous": "Inoffensif",
	"small": "Petit",
	"useful": "Utile",
	"area": "Zone",
	"stun": "Etourdissement",
	"quiet": "Silencieux",
	"many": "Multiple",
	"unreliable": "Peu Fiable",
	"stealthy": "Discret"
};


Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'translation-motw-fr',
			lang: 'fr',
			dir: 'compendium'
		});
		
		
		
		Babele.get().registerConverters({
			"tags": (tag_string) => {
				var retTags = "";
				var tagArray = tag_string.split(" ");
				tagArray.forEach(t => {
					retTags += tag_list[t] ? tag_list[t] : t;
					retTags += " ";
				});

				return retTags;
			}
		});
	}
});