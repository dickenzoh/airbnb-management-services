import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "./style.css";

export default function Test() {
  return (
    <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
            <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
          </div>
          <MDBCard>
            <MDBCardBody className="px-4 py-5">
              <MDBCarousel showIndicators showControls dark>
                <MDBCarouselItem className="active">
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol
                          lg="4"
                          className="d-flex justify-content-center"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol
                          md="9"
                          lg="7"
                          xl="8"
                          className="text-center text-lg-start mx-auto mx-lg-0"
                        >
                          <h4 className="mb-4">
                            Maria Smantha - Web Developer
                          </h4>
                          <p className="mb-0 pb-3">
                            This place was perfect for my budget. Located on
                            Ngong road in the Adam’s arcade area. This place was
                            convenient for me with close access to
                            transportation and the junction mall. You can not
                            beat the rate if you are on a budget and want to
                            experience Nairobi and are frugal.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol
                          lg="4"
                          className="d-flex justify-content-center"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol
                          md="9"
                          lg="7"
                          xl="8"
                          className="text-center text-lg-start mx-auto mx-lg-0"
                        >
                          <h4 className="mb-4">
                            Lisa Cudrow - Graphic Designer
                          </h4>
                          <p className="mb-0 pb-3">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol
                          lg="4"
                          className="d-flex justify-content-center"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="woman avatar"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol
                          md="9"
                          lg="7"
                          xl="8"
                          className="text-center text-lg-start mx-auto mx-lg-0"
                        >
                          <h4 className="mb-4">
                            John Smith - Marketing Specialist
                          </h4>
                          <p className="mb-0 pb-3">
                            Listen, if you are looking for a long-term place for
                            staying, this is it. Private and quiet, very safe
                            (UN HQ, US embassy, Australia, etc)are 15 minutes
                            away, meaning security in this area is tight. 2
                            rivers mall is 10 minutes away. Carrefour
                            supermarket, restaurants. I mean, you are sorted.
                            this is the place. And it's way too cheap at first I
                            was doubtful. To be honest, I'm certain to come here
                            again. It's worth more than you pay for. Shops and
                            public transportation are 100m away. Before you book
                            elsewhere, check this one out.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4 pt-2">
            <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
