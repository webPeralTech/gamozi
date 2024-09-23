import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Formik and Yup for handling the form validation
const searchValidationSchema = Yup.object().shape({
  searchKeyword: Yup.string()
    .min(3, 'Search term must be at least 3 characters')
    .required('Search term is required'),
});

const Header = () => {
  const initialValues = { searchKeyword: '' };

  const handleSearchSubmit = (values: any, { resetForm }: any) => {
    // Handle search form submission here
    console.log('Searching for:', values.searchKeyword);
    resetForm();
  };

  return (
    <header className="bg-gradient-to-b from-pink-500 to-pink-300 p-4 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <p className="flex items-center text-white font-bold text-lg cursor-pointer">
            {/* <Image src="/assets/images/logo.png" alt="Logo" width={150} height={50} /> */}
          </p>
        </Link>

        {/* Search Form with Formik */}
        <Formik
          initialValues={initialValues}
          validationSchema={searchValidationSchema}
          onSubmit={handleSearchSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex items-center">
              <div className="flex items-center border-b border-white py-2">
                <Field
                  type="text"
                  name="searchKeyword"
                  placeholder="Type Something"
                  className="bg-transparent border-none w-full text-white py-1 px-2 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-2 text-white hover:text-blue-300 focus:outline-none"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <ErrorMessage
                name="searchKeyword"
                component="div"
                className="text-red-600 text-xs"
              />
            </Form>
          )}
        </Formik>

        {/* Menu */}
        <nav className="flex items-center">
          <Link href="/" passHref>
            <p className="text-white mx-2 hover:text-blue-300 cursor-pointer">Home</p>
          </Link>
          <Link href="/browse" passHref>
            <p className="text-white mx-2 hover:text-blue-300 cursor-pointer">Browse</p>
          </Link>
          <Link href="/details" passHref>
            <p className="text-white mx-2 hover:text-blue-300 cursor-pointer">Details</p>
          </Link>
          <Link href="/streams" passHref>
            <p className="text-white mx-2 hover:text-blue-300 cursor-pointer">Streams</p>
          </Link>
          <Link href="/profile" passHref>
            <p className="text-white mx-2 hover:text-blue-300 cursor-pointer">
              Profile
              {/* <Image src="/assets/images/profile-header.jpg" alt="Profile" width={40} height={40} /> */}
            </p>
          </Link>
          <p className="text-white ml-auto cursor-pointer">
            <span>Menu</span>
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
