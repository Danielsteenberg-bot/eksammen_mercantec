/* 
Banko: 

Først opretter jeg en masse variabler jeg bruger senere til at fjerne brikker, 
derefter jeg en function der returnere en masser div'er som skal være min banko felter
Så skal bygger jeg en function til at generer disse plader med tal i og det hele. 

Først skal jeg fange de container jeg har lavet i min html til at have mine plader i,

De hedder bankorow1-3, dem gemmer jeg som en variable så de er hurtigere at få fat i næste gang,
Når jeg alligevel er igang med at hente elementer fra min dom, henter jeg også lige mine 2 knapper.

I min function der returnere divs, har jeg lavet 9 divs og det er ligesom det antal fælter der er vandret,
derfor kan jeg nu slippe afsted med at lave et loop der looper 3 gange da jeg gerne vil have 3 rækker.
 
så kalder jeg bare min container og skriver at min innerhtml skal være += min generate bankocard og fordi min loop kører 3 gange,
giver det mig 3 rækker af 9 felter, og fordi jeg bare kalder mine containers inde i mit loop kommer de andre også. 
Og de rækker bliver lavet efter det template jeg har lavet i min function generateBanko.

Efter jeg har generet mine plader vil jeg ligesom gerne have nogle tal ind i dem og derfor skal jeg lige have fat i de div'er,
her kan det bemærkes at jeg allerede har deklaret variabler med html doms et sted. Dette er ikke muligt fordi pladerne først bliver lavet,
efter vores loop så derfor kan vi ikke "fange dem før".

Men så looper jeg over alle mine bankofelter(bankocard), jeg vil gerne have en klase på hvert kort så det tilføjer jeg med den indbyggede
classList.add("class navn"), det er egentlig ikke nødvendigt og hvorfor der står i+1 og ikke bare i er mig lidt en gåde i retrospek
Derefter skal der jo et tal i, så jeg hiver igen fat i min variabler der holder på bankofelterne, smider i på så den tager dem alle, 
jeg skriver så at den i innerhtml skal lave et h1 element og her kan de bemærkes jeg bruger ` ` 
Det gør kan skrive normal html og tilføje js data inden i. så jeg smider igen en klasse på og smækker i med så det er individuelle klasser
derefter sætter jeg min function der genere et random tal mellem 1-100 ind så det bliver dens "value" eller tallet.

Vi skal så vide hvad værdien i hver brik er, og vi er igen nød til at lave variablen under stedet vi udskriver værdien i, 
Så lave vi et if statement der bliver lidt langt hvor vi tjekker på om værdien i felterne er = et random tal mellem 1-100
Det er her alle variablerne med randomnumb kommer i spil, hvis vi bare tog vores function igen men så ville den kun tjekke 1 tal af
Derfor er der så mange man kunne også bare have lavet så vær 3 brik var u klikbar men bankoreglerne er måske ikke super frisk for undertegende
Det kunne blandt andet løses ved at have en 3 taltabel array også tjekke hvis i = 3 innerHTML="".

Men hvis bankobrikken ikke bliver fjernet tilføjer jeg en eventlistener der lytter på click og hvis jeg clicker toggler den klassen "clicked"

Til sidst klasser til at vise og fjerne knapper

og vores function der bare laver et random tal mellem 1-100 brugt ovenover. 


*/

/* 
Password Reset:

Det første der sker i vores reset fil er at vi impotere vores ansatte array som Silas fra gruppen har lavet.
Det er fedt fordi hver enkle medarbejder er deres eget objekt i et array, og et objekt er en bunke data, 
Vi henter den ind fordi vi kunden har bedt om at kunne resete password med deres medarbejer id og det findes i vores ansatte array.

Så henter vi vores dom elementer ind som variabler.

Så kommer function der ligesom er humlen først henter vi værdien der er skrevet ind vi laver det til en variable selvom det ikke er nødvendigt
Men jeg elsker variabler. 
Så looper jeg over vores ansatte array og i loop her har jeg valgt at lave tælleren/indekset til a i stedet for i det er potato potato. 
Så tjekker om der er et id der er = med det som er blevet tastet i mit input felt hvis det er tilføjer jeg 2 klasser.
den ene er til den container jeg har lavet med succes beskeden og den anden til default containeren. 
Som navnene indikere bliver den ene vist mens den anden bliver fjernet 
og efter alt retunere jeg true hvilket egentligt ikke er nødvendigt

Hvis ikke id'et er rigtigt tilføjer jeg mine fejl beskeder. 

Jeg kan personligt bedst lide at tilføje klasser til sådan nogle ting her fordi jeg syntes det er bedre at holde tingene adskilt
Så min css er til at style med og min js er til at lave funktionalitet. 

Det eneste jeg har med min password reset er at jeg måske godt kunne have tilføjet animationer og det var jeg også gået igang med 
Men jeg er jo ikke Frontend Udvikler så jeg valgte at hjælpe min studiegruppe med at blive færdige 

*/