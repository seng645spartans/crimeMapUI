import DefaultMapView from "../DefaultMapView";
import { MapSection } from "./Dashboard.styled";
import TopNavbar from "../TopNavbar/TopNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  const { university } = useParams();
  
  return (
    <div>
      <TopNavbar />
      <SecondNavbar />
      <MapSection>
        <DefaultMapView University={university} />
      </MapSection>
    </div>
  );
};
