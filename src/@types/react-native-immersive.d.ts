declare module 'react-native-immersive' {
    const ImmersiveMode: {
      fullLayout: (enable: boolean) => void;
      setImmersive: (enable: boolean) => void;
      on: (event: 'didChange', callback: () => void) => void;
      off: (event: 'didChange', callback: () => void) => void;
    };
  
    export default ImmersiveMode;
  }