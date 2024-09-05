import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import CardBody from "../Components/Card/CardBody";
import CardCover from "../Components/Card/CardCover";

const ProductsDetail = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getUserByKey = async () => {
      const response = await fetch(
        `https://js-511bb-default-rtdb.firebaseio.com/users/${id}.json`
      );
      const data = await response.json();
      setUserData(data);
    };
    getUserByKey();
  }, []);

  console.log(id);
  return (
    <>
      {userData && (
        <Card direction="row">
          <CardCover url={userData.picture} />
          <CardBody>
            <p>
              {userData.name} {userData.lastname}
            </p>
            <p>{userData.city} </p>
            <p>{userData.phone}</p>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default ProductsDetail;
