import{Text,View,Button}from'react-native';
import HeaderText from "../../components/common/HeaderText";
import BoxContainer from "../../components/common/BoxContainer";
const IdentityAudit = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <HeaderText Title="Identity Audit" SubTitle="Let's verify your identity" HasBackButton={false} />
        <View>
            <BoxContainer title="What life transition are you currently commanding?">

            </BoxContainer>
        </View>
    </View>
    );
};

export default IdentityAudit;