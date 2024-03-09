import DefaultMapView from "../DefaultMapView";
import {
  MapSection,
} from "./Dashboard.styled";
import TopNavbar from "../TopNavbar/TopNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";

export const Dashboard = () => {
  return (
      <div>
      <TopNavbar />
      <SecondNavbar />
      <MapSection><DefaultMapView /></MapSection>
      </div>
      
  );
};
