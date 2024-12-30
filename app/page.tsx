import Banner from "@/components/Banner";
import CardCarousel from "@/components/CardCarousel/CardCarousel";
import Header from "@/components/Header";
import JobList from "@/components/JobList";
import JobSearch from "@/components/JobSearch";


export default function Home() {
  return (
    <>
    <Header />
    <JobSearch />
    <Banner />
    <JobList />
    <CardCarousel />

    </>
  );
}
