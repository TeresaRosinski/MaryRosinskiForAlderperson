import React from "react";
import { CommunityGroupData } from "./CommunityGroupData";
import "./CommunityGroups.styles.css";
import CommunityGroupCard from "../../components/Group-Card/Group-Card.component";
import EvanstonPoliceAndFire from "./EvanstonPoliceandFireFoundation.png";
import EvanstonPublicLibraryFriends from "./EvanstonPublicLibraryFriends.jpg";
import CentralStreetNeighbors from "./CENTRALSTREETNEIGHBOR.png";
import DajaeColemanFoundation from "./DajaeColemanFoundation.jpg";
import NoParkSale from "./NoParkSale.png";
import FriendsOfGilbertPark from "./friendsofgilbertpark.jpg";
import RobertCrown from "./FinanciallyResponsible.jpg";
import EvanstonLakeHouseAndGardens from "./EvanstonLakehouseAndGardens.jpeg";
import NuNeighbors from "./NorthwesternNeighbors.png";
import JensJensen from "./JensjensengardensinEvanston.jpeg";
import LincolnwoodGardenClub from "./Lincolnwoodgardenclub.jpg";

export default function CommunityGroups(props) {
  return (
    <section Id="CommunityGroups">
      <h2>Mary's Community Involvement</h2>
      <div className="CommunityGroupsContainer">
        {CommunityGroupData.map((item, index) => (
          <CommunityGroupCard
            GroupName={item.GroupName}
            GroupImage={item.GroupImage}
            GroupUrl={item.GroupUrl}
            key={index}
            CardContainer={item.CardContainer}
            Id="GroupImageContainerHover"
          />
        ))}
      </div>
    </section>
  );
}
