import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CategoryPage from "./pages/CategoryPage";
import AmakuruPage from "./pages/AmakuruPage";
import BettingTipsPage from "./pages/BettingTipsPage";
import VideosPage from "./pages/VideosPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";


const client = new ApolloClient({
  connectToDevTools: true,
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <SubNavbar />

          <Routes>
            <Route exeact path="/" element={<HomePage />}></Route>
            <Route path="PostDetails/:id" element={<PostDetailsPage />}></Route>
            <Route path="CategoryPage/:id" element={<CategoryPage />}></Route>
            <Route path="AmakuruPage" element={<AmakuruPage />}></Route>
            <Route path="BettingTipsPage" element={<BettingTipsPage />}></Route>
            <Route path="VideosPage" element={<VideosPage />}></Route>
            <Route path="ContactUsPage" element={<ContactUsPage />}></Route>
            <Route path="AboutUsPage" element={<AboutUsPage />}></Route>
            <Route
              path="TermsConditionsPage"
              element={<TermsConditionsPage />}
            ></Route>
          </Routes>
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;
