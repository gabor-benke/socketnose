import './Home.css';

const Home = () => {

  return (

    <div className="home-container">

      <h2 className="welcome-h2">Welcome to our</h2>
      <h1 className="welcome-h1">online butcher shop.</h1>

      <br/>

      <div className="benke-family">

        <h3>Benke Family's Butcher Shop</h3>

        <p>

        Once upon a time in 2000, in Ács, Hungary, that József Benke, an electrician and owner of a transport company, 
        found himself in an unstable financial situation due to the economic situation at the time.

        <br/>
        <br/>

        The Benke family already had several hectares of farmland and a small pig herd at József's parents' house. 
        The family regularly slaughtered pigs, but the pork from this was kept only for themselves.

        <br/>
        <br/>

        Fed up with his family's financial situation, József decided to take on a new side job: they raised more pigs and offered the meat for sale. 
        They fed the animals with grain grown on their own lands.

        <br/>
        <br/>

        Within a few years, the business had grown so much that József built a smaller smokehouse, a larger pig pen and a butcher shop, 
        where the homemade delicacies are still made today. 

        </p>

      </div>

      <div className="about-socketnose">

        <h3>About socketnose</h3>

        <p>
        
        The Benke family still offers their meat products in small and limited quantities, 
        based on real demand, so the condition for purchasing is a prior subscription to the products.

        <br/>
        <br/>

        The aim of the Socketnose web application is to allow customer orders to be placed not only via email and phone, but also online.

        <br/>
        <br/>

        After logging in under the Login menu, customers can select the product and the desired quantities on the Products page, and then finalize their orders on the My Orders page.

        <br/>
        <br/>

        After finalizing the order, only administrators can modify or delete it. Please contact Socketnose under the Contacts menu.

        </p>

      </div>

    </div>
    
  );
    
};

export default Home;