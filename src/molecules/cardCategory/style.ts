import { StyleSheet } from 'react-native';
import { secondaryColor } from '../../common/styles/colors';

export const cardCategoryStyle = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 230,
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
    marginBottom: 20,
  },
  cardImage: {
    flex: 1,
  },
  cardImageOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.4,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  cardText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontWeight: '700',
    fontSize: 20,
    zIndex: 10,
    color: 'white',
  },
});
