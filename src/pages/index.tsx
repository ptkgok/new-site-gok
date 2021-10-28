import React from "react"
import Baloon from "../design/balloon"
import ClientSections from "../design/clients-section"
import Footer from "../design/footer"
import GoNewsHeader from "../design/go-news-header"
import ContentGoNews from "../design/go-news/content"
import HeaderHome from "../design/header-home"
import HorizontalSlider from "../design/horizontal-slide"
import { HomeLayoutContents } from "../design/layout/home-layout"
import Navbar from "../design/navbar"
import ShowMoreSeparator from "../design/show-more"
import Solutions from "../design/solutions"
import SolutionsCases from "../design/solutions/solutions.cases"
import SolutionsProducts from "../design/solutions/solutions.products"


const Home: React.FC = () => {
  return (
    <>
      <HomeLayoutContents>
        <Navbar />
        <HeaderHome />
        <HorizontalSlider />
      </HomeLayoutContents>
      <GoNewsHeader />
      <ContentGoNews />
      <ShowMoreSeparator />
      <ClientSections />
      <div style={{
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 100,
        padding: '0px 50px'
      }}>
        <SolutionsProducts />
        <ShowMoreSeparator />
        <SolutionsCases />
        <ShowMoreSeparator />
      </div>
      <Footer />
    </>
  )
}

export default Home
