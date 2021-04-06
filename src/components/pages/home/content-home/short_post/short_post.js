import React from "react";

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText, Button} from "reactstrap";

import Tip from "./img-post/tip.jpg";
import Art from "./img-post/articles.jpg";
import Bmi from "./img-post/bmi1.jpg";

function ShortPost() {
  return (
    <>
      <div className=" card-deck car my-4 ">
        <Card className="p-3" id="card">
          <CardImg
            alt="..."
            src={Tip}
            top
          ></CardImg>
          <CardBody>
            <CardTitle tag="h3">Today's Tip</CardTitle>
            <CardText>
                    Did you know that a reasonable and safe weight
                    loss is 1–2 pounds per week? While it may take
                    as long as 6 months to lose 5–10 percent of
                    your body weight, it will make it easier
                    to keep off the weight.
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-3" id="card">
          <CardImg
            alt="..."
            src={Art}
            top
          ></CardImg>
          <CardBody>
            <CardTitle tag="h3" >Today's Article</CardTitle>
            <CardText>
                      8 Reasons You Aren’t Losing Weight: Weight loss isn’t
                      always a simple equation — other factors,
                      both internal and...
            </CardText>
          </CardBody>
          <Button>More Info</Button>
        </Card>
        <Card className="p-3" id="card">
          <CardImg
            alt="..."
            src={Bmi}
            top
          ></CardImg>
          <CardBody>
            <CardTitle tag="h3" >Bmi Calculator</CardTitle>
            <CardText>
                    Body mass index (BMI) is a measure of
                    body fat based on height and weight that applies
                    to adult men and women.
            </CardText>
          </CardBody>
          <Button>Try It</Button>
        </Card>
      </div>
    </>
  );
}
export default ShortPost;
