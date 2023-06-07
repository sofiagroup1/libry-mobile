import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Colors, Sizes, Images} from '../../../theme';
import PrimaryContainer from '../../../components/containers/PrimaryContainer';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

const OpeningScreen = () => {
  const {t} = useTranslation();
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={Colors.SCREEN_PRIMARY_BACKGROUND_COLOR}
        barStyle={'default'}
      />
      <View style={styles.parentView}>
        <PrimaryContainer style={styles.primaryContainer}>
          <View style={styles.contentContainer}>
            <Image
              source={Images.logos.app_logo}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.description}>
              <Text>{t('appAccess.openingScreen.descriptionPartOne')}</Text>
              <Text style={styles.underlinedDescription}>
                {t('appAccess.openingScreen.descriptionPartTwo')}
              </Text>
              <Text>{t('appAccess.openingScreen.descriptionPartThree')}</Text>
              <Text style={styles.underlinedDescription}>
                {t('appAccess.openingScreen.descriptionPartFour')}
              </Text>
              <Text>{t('appAccess.openingScreen.descriptionPartFive')}</Text>
              <Text style={styles.underlinedDescription}>
                {t('appAccess.openingScreen.descriptionPartSix')}
              </Text>
              <Text>{t('appAccess.openingScreen.descriptionPartSeven')}</Text>
            </Text>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                text={t('appAccess.openingScreen.signUp')}
                color="green"
                style={styles.button}
              />
              <PrimaryButton
                text={t('appAccess.openingScreen.logIn')}
                color="black"
                style={styles.button}
              />
            </View>

            <TouchableOpacity>
              <Text style={styles.troubleSignInText}>
                {t('appAccess.openingScreen.troubleSigningIn')}
              </Text>
            </TouchableOpacity>
          </View>
        </PrimaryContainer>
      </View>
    </>
  );
};

export default OpeningScreen;

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
    marginTop: Sizes.HEIGHT_RATIO * 294,
    marginBottom: Sizes.HEIGHT_RATIO * 77,
  },
  logo: {
    width: 155,
    height: 80,
  },
  description: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.text.PRIMARY_COLOR,
    marginTop: Sizes.HEIGHT_RATIO * 77,
  },
  underlinedDescription: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 12,
  },
  button: {
    marginVertical: 7,
  },
  troubleSignInText: {
    fontFamily:
      Platform.OS === 'ios' ? 'Myriad Pro Bold' : 'Myriad Pro Regular',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.text.PRIMARY_COLOR,
  },
});
