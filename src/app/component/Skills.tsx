
import '/src/app/globals.css'; // Import your global CSS for styling

export default function Skills() {
  return (
    <div id='products' className="skills-page">
    
      <h1 className="skills-title">Differents Flavours</h1>
      <p className="skills-description">Jack Wrestler energy drinks are known for their bold, high-energy formulas 
        designed to boost alertness and endurance. They come in a variety of flavors, often with a strong, tangy 
        taste profile, B vitamins, and amino acids for quick energy.</p>

      <div className="skills-container">


        <div className="skill-card">
          <h3 className="skill-name">Berry Vitamins</h3>
          <p className="skill-detail">
          Jack Wrestlers Berry Vitamin flavor packs a burst of mixed berry goodness with essential vitamins 
          for an energizing lift.</p>
        </div>


        <div className="skill-card car1">
          <div className='skill-car-1'> </div>
        </div>


        <div className="skill-card">
          <h3 className="skill-name">Mojito</h3>
          <p className="skill-detail">Jack Wrestlers Mojito flavor delivers a refreshing mint and lime twist, 
            perfect for a crisp energy boost.</p>
        </div>


        <div className="skill-card car2">
        <div className='skillcar2'> </div>
        </div>


        <div className="skill-card car3">
        <div className='skillcar3'> </div>
        </div>


        <div className="skill-card">
          <h3 className="skill-name">Blue Berry</h3>
          <p className="skill-detail">
          Jack Wrestlers Blueberry flavor offers a rich, juicy taste of ripe blueberries, 
          combined with an energy-boosting formula. </p>
        </div>


        <div className="skill-card car4">
        <div className='skillcar4'> </div>
        </div>


        <div className="skill-card">
          <h3 className="skill-name">Vitamin C</h3>
          <p className="skill-detail">
          Jack Wrestlers Vitamin C flavor offers a zesty, citrus punch packed with immune-supporting vitamin C. </p>
        </div>

      </div>
    </div>
  );
}