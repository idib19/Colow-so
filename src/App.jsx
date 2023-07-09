import './App.css'
import Form from './components/Form'
import Header from "./components/Header"
import NewHeader from './components/NewHeader'
import Page1 from './components/page1'
function App() {


  return (
    <>
      <NewHeader />

      <Page1 />


      <div class="" >
        <img class=" h-full w-full  " src="./src/assets/girls with colowso cards.jpg" alt="colow so pay" />

        <img class=" h-full w-full   " src="./src/assets/Marketplace.png" alt="Colow so marketplace"  />

      </div>

      


      <div class="flex flex-col justify-center text-indigo-900 sm:flex-row items-center  gap-8 sm:gap-16 ">
        <div class="px-4 ">
          <p class="uppercase  mb-8  text-xl sm:text-2xl ">
            <span class="font-bold mb-0 ">Ma Carte Colow-So</span>
            <br /> Gerer Facilement toutes vos opérations <br /> de paiements et de transferts en toute sécurité
          </p>
          <div class="capitalize text-lg sm:text-xl font-bold flex justify-center">
            <ul class="text-left">
              <li>Application ColowsoPay</li>
              <li>Application ColowsoTPE</li>
              <li>En ligne (Api de paiement)</li>
              <li>Terminal de paiement</li>
              <li>Electronique</li>
              <li>Paiement par SMS</li>
              <li>Transfert Visa Direct</li>
            </ul>
          </div>
        </div>

        <div class="">
          <img src="./src/assets/Phone 1.png" alt="Application Colow-so Pay" class="h-112 w-full " />
        </div>


      </div>

      <div class="flex flex-col gap-4 items-center justify-center sm:h-screen px-12 sm:px-28 pt-40 text-indigo-900">
        <div>
          <h1 class="font-semibold text-4xl sm:text-6xl">
            À PROPOS DE NOUS
          </h1>
        </div>

        <div class="text-left text-sm">
          <p class="mb-4">
            Colow-so vient des mots Colow et So et signifie &#171;la maison des cauris	&#187; Le Cauri (Colow en Bambara) était utilisé comme monnaie en Afrique et dans le reste du monde. So signifie maison en Bambara.
          </p>

          <p class="mb-4">
            Créé en 2015 au Canada par Sidy Kouyaté, Colow-so est devenue aujourd&apos;hui une plateforme incontournable et complète en services financiers. Adaptée à la réalité africaine, elle apporte une solution réelle à la problématique de la bancarisation en donnant à la classe moyenne et à la basse classe, accès à la Banque. Avec les technologies innovantes entièrement développées au Canada par la communauté, elle donne accès, à toute la population africaine, aux services financiers à bas coût.
          </p>
          <p class="mb-4">
            Colow-so, c&apos;est l&apos;expertise canadienne portée vers l'Afrique par les Africains qui ont étudié et travailler au Canada, qui a pour but d&apos;offrir une alternative financière de taille et de promouvoir la relation entre le Canada et l&apos;Afrique.
          </p>
          <p class="mb-4">
            L&apos;entreprise, régulée par l&apos;Autorité des Marchés Financiers canadiens (AMF) et le Centre d'analyse des opérations et déclarations financières du Canada (CANAFE), est gagnaate de plusieurs distinctions dont celle de la Fintech la plus sécuritaire au Canada en 2018. Elle dispose des normes de sécurité de l&apos;industrie dont PCI DSS (Payment Card Industry Data Security Standard) et ComplyAdvantage.
          </p>
          <p class="mb-4">
            President et Fondateur du Groupe Colow-so, Sidy Kouyaté possède plus de 15 ans d'expérience dans le domaine des technologies de l&apos;information, plus particulièrement en BI et Data Science.
          </p>
          <p class="mb-4">
            Diplômé de SUPINFO Paris, expoert en bases de données, analyse programmation, conception, architecture, intégration, modélisation de données et gestion de contenu.
          </p>
          <p class="mb-4">
            Il est aussi Fondateur de Wenesis et de Talent immigrant au Canada.
          </p>
        </div>
      </div>


      <div class=" px-4 sm:px-72 py-16 sm:py-36 ">
        <Form />

        <div class="mt-16 ">

          <div class="sm:flex justify-evenly font-left ">
            <div>
              <p>
                <span class="font-semibold">Bureau Toronto</span><br />
                688 Richmond St W,<br />
                Toronto, ON M6J 1C5,<br />
                Tel: +1 289-269-2517
              </p>
            </div>

            <div>
              <p>
                <span class="font-semibold">Bureau Winnipeg</span><br />
                544 Wilton Bay,<br />
                Winnipeg, MB R3M 2H9,<br />
                Tel: +1 431-489-2421
              </p>
            </div>

            <div>
              <p>
                <span class="font-semibold">Bureau Edmonton</span><br />
                215, 10205 - 101 Street,<br />
                Edmonton, AB T5J 2Y9,<br />
                Tel: +1 403-912-5907
              </p>
            </div>
          </div>

          <div class="flex justify-evenly mt-4">
            <div>
              <p class="font-semibold">
                <span>info@colow-so.com</span><br />
                +1 438-940-2403
              </p>
            </div>

            <div>
              <p class="font-semibold">
                AMF : 902820 <br />
                CANAFE : M15935735
              </p>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
