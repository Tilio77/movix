import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import { useState } from "react";

const Trending = () => {

  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => { 
    setEndpoint(tab === "Día" ? "day" : "week")
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Tendencias</span>
        <SwitchTabs data={["Día", "Semana"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending