import React, { useState } from 'react';
import { Text, View,Pressable, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { FontAwesome6 } from "@expo/vector-icons";
import HeaderText from "../../components/common/HeaderText"; 
import InputField from "../../components/common/InputField";
import BoxContainer from "../../components/common/BoxContainer";

// Dummy data for transitions
const DUMMY_TRANSITIONS = [
  { id: 1, name: "Career Reinvention" },
  { id: 2, name: "Leadership Transition" },
  { id: 3, name: "Personal Rebirth" },
  { id: 4, name: "Recovery & Healing" },
];

const IdentityAudit = () => {
  const { control, handleSubmit, reset } = useForm();
  
  const [selectedTransition, setSelectedTransition] = useState<number | null>(null);
  const [showTransitionError, setShowTransitionError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!selectedTransition) {
      setShowTransitionError(true);
      return;
    }

    const finalData = {
      ...data,
      transition_id: selectedTransition,
    };

    console.log("Synthesized Data:", finalData);

    setIsSubmitting(true);
    // API Simulation
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Identity Map Synthesized Successfully!");
      reset();
      setSelectedTransition(null);
    }, 1500);
    // navigate to next step or dashboard after successful submission
    navigation.navigate("(onboarding)/voice-clone");
  };

  return (
    <View >
      <View className="py-8 flex-col gap-8">
        
        {/* Dummy data for transitions */}
        <HeaderText 
          Title="The Identity Audit" 
          HasBackButton={false} 
        />

        <View className="flex-col gap-4">
          
          <BoxContainer title="What life transition are you currently commanding?">
            <View className="flex-col gap-2">
              {DUMMY_TRANSITIONS.map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    setSelectedTransition(item.id);
                    setShowTransitionError(false);
                  }}
                  className="flex-row items-center gap-3 self-start"
                >
                  <View className="w-6 h-6 items-center justify-center">
                    {selectedTransition === item.id ? (
                      <FontAwesome6 name="check" size={18} color="#00F2FE" />
                    ) : (
                      <View className="w-5 h-5 rounded-full border border-gray-500" />
                    )}
                  </View>
                  
                  <Text 
                    className={`text-base ${selectedTransition === item.id ? "text-[#00F2FE]" : "text-white/70"}`}
                    
                  >
                    {item.name}
                  </Text>
                </Pressable>
              ))}
            </View>

            {showTransitionError && (
              <Text className="text-red-500 text-xs mt-2">
                * Please select a transition to continue
              </Text>
            )}
          </BoxContainer>

          <BoxContainer title="Who were you required to be before this?">
            <InputField
              control={control}
              name="previous_identity"
              placeholder="Write here..."
              type="textarea"
              isRequired={true}
            />
          </BoxContainer>

          <BoxContainer title="Who are you choosing to become?">
            <InputField
              control={control}
              name="target_identity"
              placeholder="Write here..."
              type="textarea"
              isRequired={true}
            />
          </BoxContainer>

        </View>

        {/* submit button */}
        <TouchableOpacity 
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          activeOpacity={0.7}
          className={`bg-[#00F2FE] p-4 rounded-full mt-4 items-center justify-center h-14 ${isSubmitting ? 'opacity-70' : ''}`}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text className="text-black font-bold text-lg">
              Synthesize Identity Map
            </Text>
          )}
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default IdentityAudit;