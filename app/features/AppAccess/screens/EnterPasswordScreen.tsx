import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, Sizes} from '../../../theme';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import {useTranslation} from 'react-i18next';
import PrimaryContainer from '../../../components/containers/PrimaryContainer';
import ProgressBar from '../components/ProgressBar';
import Header from '../../../components/header/Header';
import * as RootNavigation from '../../../navigation/RootNavigation';
import Collapsible from 'react-native-collapsible';
import PrimaryTextInput from '../components/PrimaryTextInput';
import {validatePassword} from '../../../helper/formatters';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRegisterResponse,
  setPasswordValidation,
} from '../redux/action/action';

const EnterPasswordScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const ValidPassword = useSelector(
    (state: any) => state.appAccessReducer.validPassword,
  );
  const ref = useRef<any>();
  const [password, onChangePassword] = useState('');

  const onPressBack = () => {
    dispatch(setPasswordValidation(true));
    RootNavigation.goBack();
  };

  const onPressNext = () => {
    const valid = validatePassword(password);

    if (valid) {
      dispatch(setPasswordValidation(true));
      dispatch(getRegisterResponse(password));
    } else {
      ref.current.focus();
      dispatch(setPasswordValidation(false));
    }
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={Colors.SCREEN_PRIMARY_BACKGROUND_COLOR}
        barStyle={'default'}
      />
      <View style={styles.parentView}>
        <ProgressBar completed={4} uncompleted={5} />
        <View style={styles.primaryContentContainer}>
          <Header style={styles.header} onPressBack={onPressBack} />
          <PrimaryContainer>
            <View style={styles.passwordInputContainer}>
              <Text style={styles.title}>
                {t('appAccess.enterPasswordScreen.title')}
              </Text>

              <Text style={styles.description}>
                {t('appAccess.enterPasswordScreen.description')}
              </Text>

              <PrimaryTextInput
                reference={ref}
                value={password}
                inputMode="text"
                keyboardType="default"
                onChangeText={onChangePassword}
                secureTextEntry={true}
                error={!ValidPassword}
              />

              <Collapsible
                collapsed={ValidPassword}
                style={styles.collapsibleView}
                duration={500}>
                <Text style={styles.warning}>
                  {t(
                    'appAccess.enterPasswordScreen.warnings.incorrectPasswordFormat',
                  )}
                </Text>
              </Collapsible>
            </View>
          </PrimaryContainer>
          <PrimaryButton
            text={t('appAccess.enterPasswordScreen.next')}
            color="green"
            style={styles.button}
            onPress={() => {
              onPressNext();
            }}
          />
        </View>
      </View>
    </>
  );
};

export default EnterPasswordScreen;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: Colors.SCREEN_PRIMARY_BACKGROUND_COLOR,
  },
  primaryContentContainer: {
    flex: 1,
    paddingHorizontal: 28,
  },
  header: {
    marginTop: 10,
  },
  passwordInputContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
    marginTop: Sizes.HEIGHT_RATIO * 36,
  },
  title: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 38,
    lineHeight: 45,
    fontWeight: '600',
    color: Colors.text.PRIMARY_BUTTON_WHITE_COLOR,
    marginBottom: 24,
  },
  description: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: Colors.text.PRIMARY_BUTTON_WHITE_COLOR,
    marginBottom: 16,
  },
  button: {
    marginBottom: 20,
  },
  collapsibleView: {
    width: '100%',
  },
  warning: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: Colors.text.WARNING_RED_COLOR,
    marginTop: 14,
  },
});
