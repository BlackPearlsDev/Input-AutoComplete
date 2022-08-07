const choices = [ 
                  {val: "chirurgien dentiste", name: "Chirurgien-Dentiste"},
                  {val: "masseur kinesitherapeute", name: "Masseur-Kinésithérapeute"}, 
                  {val: "nephrologue", name: "Néphrologue"},
                  {val: "psychiatre", name: "Psychiatre"},
                  {val: "medecine physique et readaptation", name: "Médecine physique et réadaptation"},
                  {val: "medecin du travail", name: "Médecin du travail"}, /**/
                  {val: "pediatrie", name: "Pédiatrie"},
                  {val: "medecine generale", name: "Médecin généraliste"}, 
                  {val: "radio diagnostic", name: "Radio-diagnostic"}, /**/
                  {val: "pedopsychiatre", name: "Pedopsychiatre"},
                  {val: "biologie medicale", name: "Biologie"},
                  {val: "neuro psychiatrie", name: "Neuro-psychiatrie"}, /**/
                  {val: "anatomie et cytologie pathologiques", name: "Anatomie et cytologie pathologiques"}, /**/
                  {val: "chirurgie orthopedique et traumatologie", name: "Chirurgie orthopédique et traumatologie"},/**/
                  {val: "medecine vasculaire", name: "Médecine vasculaire"},
                  {val: "gynecologue", name: "Gynécologue"},
                  {val: "anesthesie reanimation", name: "Anesthesie-réanimation"}, /**/
                  {val: "reanimation", name: "Réanimation"},
                  {val: "dermatologie et venereologie", name: "Dermatologie et vénéréologie"},
                  {val: "gynecologie obstetrique", name: "Gynécologue-obstétricien"},
                  {val: "chirurgie plastique reconstructrice et esthetique", name: "Chirurgie plastique reconstructrice et esthétique"},/**/
                  {val: "orl et chirurgie cervico faciale", name: "O.R.L"},

                  {val: "neuro chirurgie", name: "Neuro-chirurgie"}, /**/
                  {val: "endocrinologie et metabolisme", name: "Endocrinologie et métabolisme"},
                  {val: "hematologie", name: "Hématologie"},
                  {val: "cardiologie et maladies vasculaires", name: "Cardiologie"},/**/
          
                  {val: "chirurgie thoracique et cardio vasculaire", name: "Chirurgie thoracique et cardio-vasculaire"}, /**/
                  {val: "neurologie", name: "Neurologie"}, /**/
                  {val: "pneumologie", name: "Pneumologie"}, /**/
                  {val: "medecin", name: "Médecin"},
                  {val: "oncologie option medicale", name: "Oncologie option médicale"}, /**/
                  {val: "geriatrie", name: "Gériatrie"}, /**/
                  {val: "ophtalmologie", name: "Ophtalmologie"}, /**/
                  {val: "rhumatologue", name: "Rhumatologue"},
                  {val: "gastro enterologie et hepatologie", name: "Gastro-entérologie et hépatologie"},

                  {val: "chirurgie generale", name: "Chirurgie générale"},
                  {val: "chirurgie urologique", name: "Chirurgie urologique"},/**/
                  {val: "stomatologue", name: "Stomatologue"}, 
                  {val: "medecine interne", name: "Médecine interne"},/**/
                  {val: "sante publique et medecine sociale", name: "Santé publique et Médecine sociale"},
                  {val: "oto rhino laryngologie", name: "Oto-rhino-laryngologie"},
                  {val: "medecine nucleaire", name: "Médecine nucléaire"}, 
          
                  {val: "radio therapie", name: "Radio-thérapie"},/**/
                  {val: "chirurgie maxillo faciale", name: "Chirurgie maxillo-faciale"},/**/
                  {val: "chirurgie vasculaire", name: "Chirurgie Vasculaire"},/**/
        
                  {val: "allergologue", name: "Allergologue"},

                  {val: "chirurgie infantile", name: "Chirurgie infantile"},/**/
                  {val: "medecine intensive reanimation", name: "Médecine intensive-réanimation"},
                  {val: "medecine d urgence", name: "Urgence"},
                  {val: "oncologie", name: "Oncologie (option Onco-hématologie)"},/**/
                  {val: "genetique medicale", name: "Génétique médicale"},/**/
  
                  {val: "maladies infectieuses et tropicales", name: "Maladies infectieuses et tropicales"},/**/
        
                  {val: "urologie", name: "Urologie"},/**/
                  {val: "medecine legale et expertises medeicale", name: "Médecine légale et expertises médicales"},
                  {val: "medecine interne et immunologie clinique", name: "Médecine interne et immunologie clinique"},/**/
                  {val: "nutritioniste", name: "Nutritioniste"},
                  {val: "specialiste du diabete", name: "Spécialiste du diabète"},
                  {val: "chirurgie orale", name: "Chirurgie Orale"},/**/
                  {val: "recherche medicale", name: "Recherche médicale"},/**/
    
                  {val: "pedicure", name: "Pédicure"},
                  {val: "podologue", name: "Podologue"},
                  {val: "pharmacie", name: "Pharmacie"},
                  {val: "sage femme", name: "Sage-Femme"},
                  {val: "audioprothesiste", name: "Audioprothésiste"},
                  {val: "opticien lunetier", name: "Opticien-Lunetier"},
                  {val: "opticien", name: "Opticien"},
                  {val: "infirmier", name: "Infirmier"},
                  {val: "orthophoniste", name: "Ortophoniste"},
                  {val: "dieteticien", name: "Diététicien"}, 
                  {val: "psychomotricien", name: "Psychomotricien"},
                  {val: "manipulateur erm", name: "Manipulateur ERM"},/**/
                  {val: "laboratoire medical", name: "Laboratoire médical"},
                  {val: "orthoptiste", name: "Orthoptiste"},
                  {val: "ergotherapeute", name: "Ergothérapeute"}, 
                  {val: "orthoprothesiste", name: "Orthoprothésiste"},/**/
                  {val: "orthopediste orthesiste", name: "Orthopédiste-Orthésiste"},
                  {val: "podo orthesiste", name: "Podo-Orthésiste"},
                  {val: "epithesiste", name: "Epithésiste"},/**/
                  {val: "oculariste", name: "Oculariste"}, /**/
                  {val: "defibrilateur", name: "Défibrilateur"}, /**/
                  {val: "dae", name: "DAE"}, /**/
                  {val: "eponologue", name: "Éponologue"}, /**/
                ];