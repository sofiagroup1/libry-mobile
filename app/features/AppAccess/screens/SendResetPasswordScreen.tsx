import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Colors, Images} from '../../../theme';
import PrimaryContainer from '../../../components/containers/PrimaryContainer';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import * as RootNavigation from '../../../navigation/RootNavigation';
import PrimaryTextInput from '../components/PrimaryTextInput';
import Collapsible from 'react-native-collapsible';
import {emailFormatevalidate} from '../../../helper/formatters';
import {useDispatch, useSelector} from 'react-redux';
import {getPasswordChangeRequest, setPasswordChangeRequest} from '../redux/action/action';
import {setUserEmail} from '../../../redux/action/action';
import EndPointError from '../../../components/views/EndPointError';

const SendResetPasswordScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const EndPointErrorVisibility = useSelector(
    (state: any) => state.commonReducer.endPointErrorVisibility,
  );
  const warnings = {
    IncorrectEmailFormat: 'IncorrectEmailFormat',
  };
  const ChangePasswordRequestStatus = useSelector(
    (state: any) => state.appAccessReducer.changePasswordReqResponse,
  );
  const [email, onChangeEmail] = useState('');
  const [warning, setWarning] = useState('');

  const emailRef = useRef<any>();

  const onPressResetPassword = () => {
    const validEmail = emailFormatevalidate(email);

    if (validEmail) {
      setWarning('');
      dispatch(setUserEmail(email));
      dispatch(getPasswordChangeRequest());
    } else {
      emailRef.current.focus();
      setWarning(warnings.IncorrectEmailFormat);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={16}
      style={styles.parentView}>
      <StatusBar
        translucent={false}
        backgroundColor={Colors.SCREEN_PRIMARY_BACKGROUND_COLOR}
        barStyle={'default'}
      />
      <View style={styles.parentView}>
        <PrimaryContainer style={styles.primaryContainer}>
          <View style={styles.topSpace} />
          {EndPointErrorVisibility ? (
            <EndPointError
              onPressBack={() => {
                RootNavigation.goBack();
              }}
            />
          ) : (
            <View style={styles.contentContainer}>
              <Image
                source={Images.logos.app_logo}
                resizeMode="contain"
                style={styles.logo}
              />

              <View style={styles.textInputContainer}>
                <PrimaryTextInput
                  reference={emailRef}
                  value={email}
                  style={styles.textInput}
                  placeholder={t(
                    'appAccess.sendResetPasswordScreen.emailPlaceholder',
                  )}
                  inputMode="email"
                  keyboardType="default"
                  onChangeText={onChangeEmail}
                />

                <Collapsible
                  collapsed={
                    warning === '' &&
                    ChangePasswordRequestStatus !== 'USER_NOT_FOUND'
                  }
                  style={styles.collapsibleView}
                  duration={500}>
                  <Text style={styles.warning}>
                    {warning === warnings.IncorrectEmailFormat ? (
                      <Text style={styles.warningRed}>
                        {t(
                          'appAccess.sendResetPasswordScreen.warnings.incorrectEmailFormat',
                        )}
                      </Text>
                    ) : ChangePasswordRequestStatus === 'USER_NOT_FOUND' ? (
                      <Text>
                        <Text style={styles.warningRed}>
                          {t(
                            'appAccess.loginScreen.warnings.emailNotRegisteredPartOne',
                          )}
                        </Text>
                        <Text
                          style={styles.warningLinkText}
                          onPress={() => {
                            dispatch(setPasswordChangeRequest('UNDEFINED'));
                            RootNavigation.navigate('OpeningScreen');
                          }}>
                          {t(
                            'appAccess.loginScreen.warnings.emailNotRegisteredPartTwo',
                          )}
                        </Text>
                        <Text style={styles.warningRed}>
                          {t(
                            'appAccess.loginScreen.warnings.emailNotRegisteredPartThree',
                          )}
                        </Text>
                      </Text>
                    ) : (
                      <Text />
                    )}
                  </Text>
                </Collapsible>
              </View>
              <PrimaryButton
                text={t('appAccess.sendResetPasswordScreen.sendPasswordReset')}
                color="green"
                style={styles.button}
                onPress={() => {
                  onPressResetPassword();
                }}
              />

              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  RootNavigation.goBack();
                }}>
                <Text style={styles.backText}>
                  {t('appAccess.sendResetPasswordScreen.back')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.bottomSpace} />
        </PrimaryContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SendResetPasswordScreen;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: Colors.SCREEN_PRIMARY_BACKGROUND_COLOR,
  },
  primaryContainer: {
    paddingHorizontal: 28,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  topSpace: {
    flex: 1.5,
  },
  bottomSpace: {
    flex: 1,
  },
  logo: {
    width: 155,
    height: 80,
    marginBottom: 10,
  },
  textInputContainer: {
    width: '100%',
    paddingHorizontal: 12,
  },
  textInput: {
    marginTop: 18,
  },
  button: {
    marginVertical: 18,
  },
  backButton: {
    marginTop: 0,
  },
  backText: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.text.PRIMARY_COLOR,
  },
  warning: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    marginTop: 18,
  },
  warningRed: {
    color: Colors.text.WARNING_RED_COLOR,
  },
  warningLinkText: {
    color: Colors.text.LINK_TEXT_COLOR,
  },
  collapsibleView: {
    width: '100%',
  },
});
