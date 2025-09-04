import type { FC } from "react";

import { Review } from "@prisma/client";
import { Star } from "lucide-react";

import { Container } from "@/components/shared";

interface ExtendedReview extends Review {
  user: {
    name: string;
  };
}

interface ReviewsProps {
  className?: string;
  reviews: ExtendedReview[];
}

export const Reviews: FC<ReviewsProps> = ({ className, reviews }) => {
  return (
    <section className={className}>
      <Container className="pt-20 flex flex-col gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-background rounded-lg px-6 py-8">
            <p className="font-bold text-lg text-foreground">
              {review.user.name}
            </p>
            <div className="flex items-center gap-1 py-2">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>
                  <Star className="fill-yellow-400" color="#FACC15" size={15} />
                </span>
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </Container>
    </section>
  );
};
