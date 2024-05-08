/** @format */

import { useState } from "react";
import BurgerMenu from "../components/MajorComponents/BurgerMenu";
import Header from "../components/MajorComponents/Header";
import {
  Sidebar,
  SidebarControlBar,
  SidebarInfoBox,
  SidebarCollectionMenu,
} from "../components/MajorComponents/Sidebar";
import Logo from "../components/MinorComponents/Logo";
import {
  CollectionCardsContainer,
  CollectionInfo,
  CollectionPart,
} from "../components/MajorComponents/CollectionPart";
import useFetchData from "../hooks/useFetchData";

export default function Application() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [{ status, data, selectedCollection }, dispatch] = useFetchData();
  console.log("status: ", status);
  console.log("data: ", data);
  console.log("selectedCollection: ", selectedCollection);

  //derived states go here
  const numberOfCollections = data.length;
  const totalNumberOfCards = data.reduce(
    (acc, cur) => acc + cur.cards.length,
    0
  );

  return (
    <div className="App">
      <Header>
        <Logo />
        <BurgerMenu />
      </Header>
      {/* <SidebarControlBar closeSidebar={setIsSidebarOpen} /> */}
      {isSidebarOpen && (
        <Sidebar>
          <SidebarInfoBox
            totalCollections={numberOfCollections}
            totalCards={totalNumberOfCards}
          />
          <SidebarCollectionMenu
            collections={data}
            status={status}
            dispatch={dispatch}
            selectedId={selectedCollection.id}
          />
        </Sidebar>
      )}
      <CollectionPart>
        {selectedCollection.cards ? (
          <>
            <CollectionInfo
              name={selectedCollection.name}
              totalCards={selectedCollection.cards.length}
            />
            <CollectionCardsContainer data={selectedCollection.cards} />
          </>
        ) : (
          "SELECT A COLLECTION FROM THE SIDEBAR PLEASE"
        )}
      </CollectionPart>
    </div>
  );
}
