import { Link, useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import CardBody from "../Components/Card/CardBody";
import CardCover from "../Components/Card/CardCover";

const ProductsPage = ({ usersData }) => {
  return (
    <>
      <h1 className="text-2xl">Página de productos</h1>
      <div className="grid grid-cols-4 gap-4">
        {usersData.length &&
          usersData.map(({ picture, name, lastname, key }) => {
            return (
              <Link to={`/product-detail/${key}`}>
                <Card>
                  <CardCover url={picture} />
                  <CardBody>
                    <h2 className="text-xl">
                      {name} {lastname}
                    </h2>
                    <span>Show Details</span>
                  </CardBody>
                </Card>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ProductsPage;
