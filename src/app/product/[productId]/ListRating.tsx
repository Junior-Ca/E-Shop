"use client";

import Heading from "@/app/components/products/Heading";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
    </div>
  );
};

export default ListRating;
