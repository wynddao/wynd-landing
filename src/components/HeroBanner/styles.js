export const styles = {
  section: {
    position: 'relative',
  },
  heroBackgroundContainer: {
    position: 'absolute',
    zIndex: '-1',
    left: 0,
    top: 0,
    overflow: 'hidden'
  },
  container: {
    paddingBottom: '50px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderLeft: '1px solid #31253F',
    borderRight: '1px solid #31253F',
    overflow: 'hidden'
  },
  treesContainer: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: '-1',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  treesContainerInner: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  trees: {
    height: '100%'
  },
  treesBG: {
    backgroundImage: 'linear-gradient(to top, rgba(245, 246, 252, 0.20), rgba(57,53,112, 0.9))',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    borderRadius: '200px',
    padding: '4px'
  },
  buttonText: {
    marginLeft: '24px',
    marginRight: '24px'
  },
  druidContainer: {
    position: 'absolute',
    bottom: -7,
    right: 0
  },
  druid: {
    maxWidth: '100%'
  },
  bottomBorders: {
    borderTop: '1px solid #31253F'
  },
  bottomBordersContainer: {
    borderLeft: '1px solid #31253F',
    borderRight: '1px solid #31253F',
    width: '100%',
    height: '50px'
  }
};