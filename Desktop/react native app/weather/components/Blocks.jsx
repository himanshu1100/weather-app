import { StyleSheet, Text, View } from "react-native";

function Block({ label, value, unit }) {
    return (
      <View style={styles.block}>
        <Text style={styles.blockLabel}>{label}</Text>
        <Text style={styles.blockValue}>{value}{unit}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    blocks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      block: {
        width: 150,
        height: 150,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
          margin:10,
          padding:5
        
      },
      blockLabel: {
        fontSize: 16,
        marginBottom: 5,
      },
      blockValue: {
        fontSize: 24,
        fontWeight: 'bold',
      },
}) 
export default Block;