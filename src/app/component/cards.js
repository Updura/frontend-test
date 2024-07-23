import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://imgflip.com/s/meme/Smiling-Cat.jpg" /*img*/
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Dreamy Candy Forest</h5>
              <p className="card-text">
              a descriptive term that evokes imagery of a fantastical and whimsical landscape, typically associated with a playful and vibrant color palette reminiscent of candy and confectionery.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://i.pinimg.com/originals/bf/80/33/bf80330a6b4525324e166ae245e1b8a4.png" /*img*/
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Celery Mousse</h5>
              <p className="card-text">
              a term that typically combines the visual and sensory aspects of celery with the culinary technique of creating a mousse.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://media.tenor.com/wxjjQc2HzgoAAAAM/cattt.gif" /*img*/
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Passionate Plum</h5>
              <p className="card-text">
              typically refers to a specific shade of purple, often associated with deep, rich tones resembling the color of ripe plums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
