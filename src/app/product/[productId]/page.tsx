import Container from "@/app/components/Container";
import { product } from "@/app/utils/product";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import moment from "moment";
import { Rating } from "@mui/material";
import Avatar from "@/app/components/Avatar";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
          <div className="text-sm mt-2">
            {product.reviews &&
              product.reviews.map((review: any) => {
                return (
                  <div key={review.id} className="max-w-[300px]">
                    <div className="flex gap-2 items-center">
                      <Avatar src={review?.user.image} />
                      <div className="font-semibold">{review?.user.name}</div>
                      <div className="font-light">
                        {moment(review.createdDate).fromNow()}
                      </div>
                    </div>
                    <div className="mt-2">
                      <Rating value={review.rating} readOnly />
                      <div className="ml-2">{review.comment}</div>
                      <hr className="mt-4 mb-4" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
