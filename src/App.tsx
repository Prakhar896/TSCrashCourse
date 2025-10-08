import React from 'react';
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiBadge,
} from '@elastic/eui';

const App: React.FC = () => {
  return (
    <div>
      {/* Educational Notice Banner */}
      <div
        style={{
          background: '#f5f5f5',
          padding: '8px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#666',
        }}
      >
        This is a fictional website developed for educational purposes only.
      </div>

      {/* Header */}
      <EuiHeader
        style={{
          background: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <EuiHeaderSection>
          <EuiHeaderSectionItem>
            <EuiText size="m" style={{ fontWeight: 'bold', fontSize: '28px' }}>
              <span style={{ color: '#6B4E3D' }}>Brew</span>
              <span style={{ color: '#7FA38C' }}>thical</span>
            </EuiText>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>
            <EuiHeaderLinks>
              <EuiHeaderLink>Home</EuiHeaderLink>
              <EuiHeaderLink>About Us</EuiHeaderLink>
              <EuiHeaderLink>Products</EuiHeaderLink>
              <EuiHeaderLink>Contact</EuiHeaderLink>
            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
          
          <EuiHeaderSectionItem>
            <EuiFlexGroup gutterSize="m" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiIcon type="search" size="l" style={{ cursor: 'pointer' }} />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                  <EuiIcon type="shopping" size="l" />
                  <EuiBadge
                    color="#7FA38C"
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      minWidth: '18px',
                      height: '18px',
                      padding: '0 4px',
                      fontSize: '11px',
                    }}
                  >
                    0
                  </EuiBadge>
                </div>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiIcon type="user" size="l" style={{ cursor: 'pointer' }} />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>

      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #5A4A42',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '60px 20px',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <EuiText>
            <h1
              style={{
                color: 'white',
                fontSize: '56px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                lineHeight: '1.2',
              }}
            >
              Invigorating Taste,
              <br />
              Ethically Sourced
            </h1>
          </EuiText>
          
          <EuiSpacer size="l" />
          
          <EuiText>
            <p
              style={{
                color: 'white',
                fontSize: '20px',
                marginBottom: '40px',
              }}
            >
              Discover premium coffee beans that make a difference
            </p>
          </EuiText>
          
          <EuiSpacer size="xl" />
          
          <EuiButton
            fill
            size="m"
            style={{
              background: '#7FA38C',
              border: 'none',
              borderRadius: '25px',
              padding: '12px 40px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Explore Our Collection
          </EuiButton>
        </div>
      </div>
    </div>
  );
};

export default App;