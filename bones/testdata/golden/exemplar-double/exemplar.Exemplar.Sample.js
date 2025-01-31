// exemplar.Exemplar.Sample (Unary)

// Input:
// {
//   request: {
//     name: "",  // string
//   },
// }

function Sample(input) {
  return {
    response: {
      aBool: false,  // bool
      aInt32: 0,  // int32
      aSint32: 0,  // sint32
      aSfixed32: 0,  // sfixed32
      aUint32: 0,  // uint32
      aFixed32: 0,  // fixed32
      aInt64: 0,  // int64
      aSint64: 0,  // sint64
      aSfixed64: 0,  // sfixed64
      aUint64: 0,  // uint64
      aFixed64: 0,  // fixed64
      aFloat: 0.0,  // float
      aDouble: 0.0,  // double
      aString: "",  // string
      aBytes: "",  // bytes
      aEnum: "SAMPLE_ENUM_FIRST",  // SampleEnum
      aMessage: {  // SampleMessage1
        field: "",  // string
        repeat: [0],  // repeated int32
      },
      aMap: [  // map<string, bool>
        {
          key: "",  // string
          value: false,  // bool
        }
      ],
      aDeepMap: [  // map<string, SampleMessage2>
        {
          key: "",  // string
          value: {  // SampleMessage2
            weirdFieldName1: "",  // string
            aStringList: [""],  // repeated string
            aMsgList: [  // repeated SampleMessage1
              {
                field: "",  // string
                repeat: [0],  // repeated int32
              }
            ],
          },
        }
      ],
      aIntList: [0],  // repeated int32
      aEnumList: ["SAMPLE_ENUM_FIRST"],  // repeated SampleEnum
      aMessageList: [  // repeated SampleMessage1
        {
          field: "",  // string
          repeat: [0],  // repeated int32
        }
      ],
      // aStringOneof: "",  // string (one-of a_oneof)
      // aEnumOneof: "SAMPLE_ENUM_FIRST",  // SampleEnum (one-of a_oneof)
      // aMessageOneof: {  // SampleMessage1 (one-of a_oneof)
      //   field: "",  // string
      //   repeat: [0],  // repeated int32
      // },
    },
  }
}
