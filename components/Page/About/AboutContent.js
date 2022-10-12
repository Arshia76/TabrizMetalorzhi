import ModalImage from 'react-modal-image';
import Resource from '../../../public/Resource';
import PropTypes from 'prop-types';

const AboutContent = (props) => {
  return (
    <div className='md:px-40 mt-10 mb-20'>
      <div className='w-full'>
        <div>
          {props.isCertification ? (
            <>
              <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-16 w-full'>
                <ModalImage
                  small={'../Resource/Images/Govahi/govahi1.jpg'}
                  large={Resource.Images.GOVAHI1_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI2}
                  large={Resource.Images.GOVAHI2_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI3}
                  large={Resource.Images.GOVAHI3_BIG}
                />

                <ModalImage
                  small={Resource.Images.GOVAHI4}
                  large={Resource.Images.GOVAHI4_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI5}
                  large={Resource.Images.GOVAHI5_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI6}
                  large={Resource.Images.GOVAHI6_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI7}
                  large={Resource.Images.GOVAHI7_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI8}
                  large={Resource.Images.GOVAHI8_BIG}
                />
                <ModalImage
                  small={Resource.Images.GOVAHI9}
                  large={Resource.Images.GOVAHI9_BIG}
                />
              </div>
            </>
          ) : (
            <div className=' mb-10 mt-14'>
              <h1 className='text-3xl whitespace-pre-line px-6 text-black leading-loose text-justify'>
                {props.content}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

AboutContent.propTypes = {
  content: PropTypes.string,
};

export default AboutContent;
