import React from 'react';
import PreCode from '../../preCode/PreCode';

const propTypes = {};
const defaultProps = {};

function Introduction() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Introduction</h1>
      <p className="lead-in">Let me introduce myself</p>
      <PreCode
        style={{ fontSize: '9px' }}
        codeRaw={`
                                      '$&
                                      @R$k
                                    '$!!!M&
                                    @?~~~!$k
                                  '9!!~ ~~!MX
                                  @X~~   \`~!$k
                                 9!!      ~~!$X
                                dR!~       \`~!$>
                               XR!~         \`~!$k:
                              tR!~        ::~~!!MMXXHHHH!!<:.
                             <$!xxiXX!!!~~~~~~~!!MMMMMMMMMMMMMMMXXXXx::
                        .:X@N$$$RMMX!!!!~~~~~~~~!!MMMM@@MMMMMMMMMMMMXMSMMtHHHX!
                  :xiM#"~  <$!~  \`~~~!~~~~~~~~~~~!!MX!!!!!??#RR888MMMMMMMMMMMHH
           ..XH@!~\`       X$!~                 '~~~!MX!!!!!!!!!!!!?MMR@@$MMMMMM
     :xiM#"~             <$!~                     '~!MM??MMX!!!!!!!!!!!!!!??#R$
XH@M!\`\`                 :$!!                        ~!R:   \`~!MM!XH!!!!!!!!!!!!
                       <$!~                         \`!!M:        \`~"??HHX!!!!!!
                      :$!~                           \`!!R:              \`!!MMMH
                     '$!~                             \`~!8:                   ~
                    :$!!                               ~!!N:
                   '$!~                                 \`!!N:
                  .$!!~                                  ~~!&>
                 '@!!~                                    ~!MN
                .$!!~                                     ~~!M&>
               :@$MHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!H$N
          `}
      />
    </div>
  );
}

Introduction.propTypes = propTypes;
Introduction.defaultProps = defaultProps;

export default Introduction;
