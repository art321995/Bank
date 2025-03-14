
import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { ControlBilling } from "@/components/ControlBilling";
import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData/>
      <BestBusiness/>
      <ChooseYourCards />
      <ControlBilling />
    </>
  )
}
