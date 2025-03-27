# **TechVibes TODO App – Workshop** 🚀  

Benvenuti nel workshop **TechVibes TODO App**! 🎉 Qui avrete l'opportunità di lavorare su una piccola TODO list, migliorandone le funzionalità attraverso una serie di esercizi mirati a fare esperienza con alcune tecniche per rilasciare codice incompleto, abilità fondamentale per fare Continuous Integration / Trunk-Based Development.

---

## **📌 Contesto: Benvenuti in TechVibes**  

TechVibes è una **startup innovativa** che sta rivoluzionando il modo in cui i team gestiscono le proprie attività quotidiane. Stiamo costruendo una **TODO App** che aiuti le persone a organizzare il lavoro in modo efficace, con un'interfaccia semplice e funzionalità avanzate.  

Siete stati appena assunti nel team di sviluppo e il vostro primo incarico è **migliorare l’app esistente**, che al momento permette solo di **creare e visualizzare** task. La roadmap prevede nuove funzionalità fondamentali: **modifica, eliminazione, gestione dello stato e delle priorità**.  

Il vostro obiettivo è lavorare **seguendo le migliori pratiche** e applicando strategie come **Parallel Change, Feature Flag e Keystone Interface** per rendere il codice scalabile e manutenibile nel tempo.  

---

## **⚖️ Regole del Workshop**  

✅ **Team Mob Programming**

L'esercizio verrà svolto da team di 4 persone utilizzando la pratica del Mob Programming. Potete leggere qualcosa a riguardo [qui](https://www.pluralsight.com/resources/blog/software-development/mob-programming-101), ma in breve questo significa:

- Ogni team avrà a disposizione una breakout room per lavorare insieme.
- A rotazione, ognuno dei membri del team sarà driver, ovvero condividerà lo schermo e gestirà la scrittura del codice
- Tutti gli altri membri del team sono navigators: devono comunicare attivamente e collaborare, tra di loro ed insieme al driver, per implementare quanto richiesto dall'esercizio
- Lo scambio di ruoli avviene tramite timer, seguendo la tecnica del Pomodoro: ogni 25 minuti è obbligatorio cambiare driver
- Lo scambio di ruoli deve obbligatoriamente avvenire tramite push delle modifiche fatte, anche se scegliete di utilizzate tool di scrittura codice collaborativa

✅ **Extreme Trunk-Based Development: no branches, pipeline sempre verde**  

È obbligatorio lavorare direttamente sul branch principale (master), senza aprire branch. Ogni volta che viene richiesto di fare push delle modifiche, questo deve avvenire direttamente su master.

Inoltre, la pipeline di test e deploy dopo il push deve sempre rimanere verde. Se la pipeline dovesse rompersi, fixarla diventa la priorità assoluta del team: non si può procedere con l'esercizio finchè la pipeline non è stata sistemata.

✅ **Push obbligatori!**  

In alcuni step dell'esercizio, riceverete l'indicazione di fare obbligatoriamente push tra una modifica e l'altra - quando il team arriva ad uno step e trova il comando di push obbligatorio, deve per forza fare push (anche se non sono ancora passati i 25 minuti per lo switch).

Il comando è il seguente:

🚨 Push forzato 🚨 Prima di proseguire, devi per forza fare push delle tue modifiche.

✅ **Divertimento e condivisione**  

- Durante il workshop discuteremo le soluzioni e valuteremo insieme le scelte fatte.  
- Siate curiosi e aperti al confronto
- Divertitevi!

---

## **🛠️ Tech Stack e Setup dell’Ambiente di Sviluppo**  

Assicurati di avere installato **Node.js** (consigliata v20) in modo da avere a disposizione **npm**.

### **1️⃣ Installazione**  

```sh
npm install
```

### **2️⃣ Avviare il backend tramite json-server**  

```sh
npm run json-server
```

### **3️⃣ Avviare l'applicazione**  

```sh
npm run dev
```

L’app sarà disponibile su <http://localhost:3000> 🚀.

### **4️⃣ Eseguire i test**

```sh
npm run test
```

Dovresti vedere i test esistenti passare con successo. Man mano che implementerai nuove funzionalità, aggiorna e aggiungi test dove necessario.

---

Ora sei pronto per iniziare il workshop! 🎯 Buon coding e benvenuto in TechVibes! 🚀

---

## **🛠️ Setup pipeline e rilascio

La pipeline di rilascio avviene tramite GitHub Actions + Vercel.
Su GitHub Actions vengono eseguiti i test automatici in un ambiente containerizzato, mentre su Vercel viene eseguito il deploy.

NB: i due processi sono paralleli, non consequenziali - solo per semplicità per l'esercizio.

### Step 1: Crea il DB di produzione

Per prima cosa, ci serve un database PostgreSQL da utilizzare in "produzione". Potete utilizzare qualunque hosting gratuito, per esempio:

- Neon DB
- Supabase

Una volta configurato il DB sul servizio di hosting, salvatevi la stringa di connessione al DB.

### Step 2: GitHub Actions

Non dovrebbe essere richiesto nessun intervento da parte vostra - al primo push dovreste vedere i test verdi nelle GitHub Actions.

### Step 3: Vercel

Se non lo siete già, iscrivetevi gratuitamente a Vercel usando il vostro account GitHub.
Una volta dentro, dalla pagina "overview" cliccate su "Add New..." -> "Project".

Vercel mostrerà la lista dei vostri repository GitHub, e potrete selezionarlo per configurare velocemente un deploy.
Una volta selezionato il progetto, aprite la sezione "Environment Variables" ed inserite una variabile chiamata DATABASE_URL, come valore utilizzate la stringa di connessione al DB ottenuta allo step 1.

Cliccate infine su "Deploy" per far partire il primo deploy della vostra TODO List.

### 📦 Built With

This repository has been forked by <https://github.com/candraKriswinarto/simple-todoapp-with-next13> and then adapted for the workshop.

- [nextjs 13 docs] https://beta.nextjs.org/docs
- [json-server] https://github.com/typicode/json-server
- [tailwindcss] https://tailwindcss.com/docs/guides/nextjs
- [daisy ui] https://daisyui.com/components/
- [react-icons] https://react-icons.github.io/react-icons/
- [uuid] https://github.com/uuidjs/uuid
