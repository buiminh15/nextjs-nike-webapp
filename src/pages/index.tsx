import FeaturedContainer from 'src/components/FeaturedContainer';
import HighLightsContainer from 'src/components/HighLightsContainer';
import PopularSales from 'src/components/PopularSales';
import TopRatedSales from 'src/components/TopRatedSales';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <PopularSales />
      <HighLightsContainer />
      <TopRatedSales />
      <FeaturedContainer />
    </div>
  );
}
