import BookHero from "@/components/book/BookHero";
import RecognitionMoment from "@/components/book/RecognitionMoment";
import AboutTheBook from "@/components/book/AboutTheBook";
import StoriesInside from "@/components/book/StoriesInside";
import WhatYoullLearn from "@/components/book/WhatYoullLearn";
import WhoThisIsFor from "@/components/book/WhoThisIsFor";
import ProductDisplay from "@/components/book/ProductDisplay";
import AboutTheAuthor from "@/components/book/AboutTheAuthor";
import FinalCTA from "@/components/book/FinalCTA";

const SignedBookPage = () => (
  <main className="pt-20">
    <BookHero />
    <RecognitionMoment />
    <AboutTheBook />
    <StoriesInside />
    <WhatYoullLearn />
    <WhoThisIsFor />
    <ProductDisplay />
    <AboutTheAuthor />
    <FinalCTA />
  </main>
);

export default SignedBookPage;
