import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import Service from "../components/Service/Service";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <Layout pageTitle="SlinggyApps">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <About />
      <Footer />
    </Layout>
  );
}
