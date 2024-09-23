import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  @apply flex flex-col min-h-screen;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {/* // bg-gradient-to-b from-pink-100 via-gray-200 to-pink-100 */}
      <main className="flex-grow p-4 bg-gradient-to-b from-pink-100 via-gray-200 to-pink-100 bg-radial-dots">{children}</main> 
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
