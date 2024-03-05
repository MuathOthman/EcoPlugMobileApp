import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationModal = ({ visible, onConfirm, onCancel }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Are you sure you want to stop charging?</Text>
                    <View style={styles.modalButtonsContainer}>
                        <TouchableOpacity style={styles.modalButton} onPress={onConfirm}>
                            <Text style={styles.modalButtonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={onCancel}>
                            <Text style={styles.modalButtonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '80%',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        padding: 10,
        borderRadius: 100,
        width: '45%',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ConfirmationModal;