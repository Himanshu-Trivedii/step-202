import React, { useState } from "react";
import {
  X,
  Plus,
  Building,
  Table,
  Check,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  // Modal Components
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalHeaderContent,
  ModalTitle,
  ModalSubtitle,
  ModalBadge,
  CloseButton,
  ProgressBar,
  ProgressContainer,
  StepContainer,
  StepCircle,
  StepInfo,
  StepTitle,
  StepDescription,
  ProgressLine,
  Content,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  HelpText,
  Button,
  Footer,
  CompletionContainer,
  CompletionIcon,
  CompletionTitle,
  CompletionText,
} from "./style";
// Import reusable column config components
import { ColumnConfigForm } from "../column-config";
import { ColumnConfig, LabelValue } from "../column-config/types";

interface ColumnDefinition extends ColumnConfig {
  id: string;
}

interface RegistrationStepperModalRequest {
  businessName: string;
  bussId: string;
  bussPrefix: string;
  fields: {
    label: string;
    columnType: string;
    filterable: boolean;
    hidden: boolean;
  }[];
}

interface LoginResp {
  respMessage: string;
  businesses: any[];
}

// Mock API function - replace with actual import
const srGetRegistrationData = async (
  payload: RegistrationStepperModalRequest,
): Promise<LoginResp> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        respMessage: "Registration successful!",
        businesses: [{ id: 1, name: payload.businessName }],
      });
    }, 1000);
  });
};

// Mock business store functions - replace with actual store imports
const useBusinessStore = () => ({
  setSelectedBusiness: (business: any) =>
    console.log("Selected business:", business),
  setBusinesses: (businesses: any[]) =>
    console.log("Set businesses:", businesses),
});

// Mock router - replace with actual router import
const useRouter = () => ({
  push: (path: string) => {
    console.log("Navigate to:", path);
    // In a real app, this would navigate to the home page
  },
});

interface OrganizationData {
  organizationName: string;
  organizationId: string;
  tablePrefix: string;
}

export default function RegistrationStepperModal() {
  // Enhanced CSS for synchronized scrolling - only internal scrollbar
  const enhancedScrollStyle = `
    /* Prevent external page scrolling */
    body {
      overflow: hidden !important;
    }

    /* Ensure modal container doesn't overflow */
    .modal-container-fixed {
      height: 90vh !important;
      max-height: 90vh !important;
      overflow: hidden !important;
    }

    /* Internal scrollbar styling */
    .smooth-scroll-container {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: #e5e7eb transparent;
    }

    .smooth-scroll-container::-webkit-scrollbar {
      width: 6px;
    }

    .smooth-scroll-container::-webkit-scrollbar-track {
      background: transparent;
    }

    .smooth-scroll-container::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 3px;
      transition: background 0.2s ease;
    }

    .smooth-scroll-container::-webkit-scrollbar-thumb:hover {
      background: #d1d5db;
    }

    .column-card {
      transition: all 0.2s ease;
      transform: translateY(0);
    }

    .column-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.15);
    }

    .sticky-header {
      backdrop-filter: blur(8px);
      background: rgba(255, 255, 255, 0.95);
      transition: all 0.2s ease;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fadeInUp 0.3s ease-out;
    }
  `;

  const router = useRouter();
  const { setSelectedBusiness, setBusinesses } = useBusinessStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for back

  const [organizationData, setOrganizationData] = useState<OrganizationData>({
    organizationName: "",
    organizationId: "",
    tablePrefix: "",
  });

  const [columns, setColumns] = useState<ColumnDefinition[]>([
    {
      id: "1",
      label: "",
      columnName: "",
      columnType: "STRING",
      hidden: false,
      filterable: false,
      searchable: false,
      filterValues: [],
    },
  ]);

  const steps = [
    {
      id: 1,
      title: "Organization Setup",
      description: "Configure your organization",
      icon: Building,
    },
    {
      id: 2,
      title: "Define Table Columns",
      description: "Set up your table structure",
      icon: Table,
    },
  ];

  const columnTypes: LabelValue[] = [
    { label: "Text", value: "STRING" },
    { label: "Number", value: "NUMBER" },
    { label: "Timestamp", value: "TIMESTAMP" },
    { label: "Boolean", value: "BOOLEAN" },
  ];

  const updateOrganizationData = (
    field: keyof OrganizationData,
    value: string,
  ) => {
    setOrganizationData((prev) => ({ ...prev, [field]: value }));
  };

  const addColumn = () => {
    const newColumn: ColumnDefinition = {
      id: Date.now().toString(),
      label: "",
      columnName: "",
      columnType: "STRING",
      hidden: false,
      filterable: false,
      searchable: false,
      filterValues: [],
    };
    setColumns([...columns, newColumn]);
  };

  const updateColumn = (id: string, updates: Partial<ColumnConfig>) => {
    setColumns(
      columns.map((col) => (col.id === id ? { ...col, ...updates } : col)),
    );
  };

  const removeColumn = (id: string) => {
    if (columns.length > 1) {
      setColumns(columns.filter((col) => col.id !== id));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const triggerRegistrationStepperModal = () => {
    const payload: RegistrationStepperModalRequest = {
      businessName: organizationData.organizationName,
      bussId: organizationData.organizationId,
      bussPrefix: organizationData.tablePrefix,
      fields: columns.map((col) => ({
        label: col.label,
        columnType: col.columnType.toUpperCase(),
        filterable: col.filterable,
        hidden: col.hidden,
      })),
    };

    srGetRegistrationData(payload)
      .then((resp: LoginResp) => {
        toast.success(resp?.respMessage);
        setIsCompleted(true);
        setSelectedBusiness(resp?.businesses[0]);
        setBusinesses(resp?.businesses);

        setTimeout(() => {
          router.push("/home");
        }, 1000);
      })
      .catch((err: any) => toast.error(err.errorMsg));
  };

  const isStep1Valid =
    organizationData.organizationName &&
    organizationData.organizationId &&
    organizationData.tablePrefix;

  const isStep2Valid =
    columns.length > 0 &&
    columns.every(
      (col) =>
        col.label &&
        col.label.trim() !== "" &&
        col.columnType &&
        col.columnType.trim() !== "",
    );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: enhancedScrollStyle }} />
      <Overlay>
        <ModalContainer className="modal-container-fixed">
          {isCompleted ? (
            <CompletionContainer>
              <CompletionIcon>
                <CheckCircle size={32} color="#16a34a" />
              </CompletionIcon>
              <CompletionTitle>Table Created!</CompletionTitle>
              <CompletionText>
                Your table configuration has been saved successfully.
              </CompletionText>
            </CompletionContainer>
          ) : (
            <>
              {/* Header */}
              <ModalHeader>
                <ModalHeaderContent>
                  <ModalTitle>{steps[currentStep - 1].title}</ModalTitle>
                  <ModalSubtitle>
                    {steps[currentStep - 1].description}
                  </ModalSubtitle>
                </ModalHeaderContent>
                <ModalBadge>
                  Step {currentStep} of {steps.length}
                </ModalBadge>
              </ModalHeader>

              {/* Progress Bar */}
              <ProgressBar>
                <ProgressContainer>
                  {steps.map((step, index) => {
                    const isActive = step.id === currentStep;
                    const isCompleted = step.id < currentStep;
                    const StepIcon = step.icon;

                    return (
                      <React.Fragment key={step.id}>
                        <StepContainer>
                          <StepCircle
                            isActive={isActive}
                            isCompleted={isCompleted}
                          >
                            {isCompleted ? (
                              <Check size={20} />
                            ) : (
                              <StepIcon size={20} />
                            )}
                          </StepCircle>
                          <StepInfo>
                            <StepTitle
                              isActive={isActive}
                              isCompleted={isCompleted}
                            >
                              {step.title}
                            </StepTitle>
                            <StepDescription>
                              {step.description}
                            </StepDescription>
                          </StepInfo>
                        </StepContainer>

                        {index < steps.length - 1 && (
                          <ProgressLine isCompleted={currentStep > step.id} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </ProgressContainer>
              </ProgressBar>

              {/* Content */}
              <Content>
                <AnimatePresence mode="wait" custom={direction}>
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={{
                        enter: (direction: number) => ({
                          x: direction > 0 ? 300 : -300,
                          opacity: 0,
                        }),
                        center: {
                          zIndex: 1,
                          x: 0,
                          opacity: 1,
                        },
                        exit: (direction: number) => ({
                          zIndex: 0,
                          x: direction < 0 ? 300 : -300,
                          opacity: 0,
                        }),
                      }}
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <FormContainer>
                        <FormGroup>
                          <Label htmlFor="organizationName">
                            Organization Name *
                          </Label>
                          <Input
                            id="organizationName"
                            value={organizationData.organizationName}
                            onChange={(e) =>
                              updateOrganizationData(
                                "organizationName",
                                e.target.value,
                              )
                            }
                            placeholder="Enter your organization name"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="organizationId">
                            Organization ID *
                          </Label>
                          <Input
                            id="organizationId"
                            value={organizationData.organizationId}
                            onChange={(e) =>
                              updateOrganizationData(
                                "organizationId",
                                e.target.value,
                              )
                            }
                            placeholder="Enter organization ID (e.g., org_12345)"
                          />
                          <HelpText>
                            This will be used as a unique identifier for your
                            organization
                          </HelpText>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="tablePrefix">Table Prefix *</Label>
                          <Input
                            id="tablePrefix"
                            value={organizationData.tablePrefix}
                            onChange={(e) =>
                              updateOrganizationData(
                                "tablePrefix",
                                e.target.value,
                              )
                            }
                            placeholder="Enter table prefix (e.g., usr_)"
                          />
                          <HelpText>
                            This prefix will be added to all table names for
                            organization
                          </HelpText>
                        </FormGroup>
                      </FormContainer>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={{
                        enter: (direction: number) => ({
                          x: direction > 0 ? 300 : -300,
                          opacity: 0,
                        }),
                        center: {
                          zIndex: 1,
                          x: 0,
                          opacity: 1,
                        },
                        exit: (direction: number) => ({
                          zIndex: 0,
                          x: direction < 0 ? 300 : -300,
                          opacity: 0,
                        }),
                      }}
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        {/* Fixed Add Column Button - Outside scrollable area */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "0 0 12px 0",
                            marginBottom: "8px",
                            borderBottom: "1px solid #e2e8f0",
                          }}
                        >
                          <Button variant="secondary" onClick={addColumn}>
                            <Plus size={16} />
                            Add Column
                          </Button>
                        </div>

                        {/* Enhanced Scrollable Columns Container */}
                        <div
                          style={{
                            maxHeight: "400px",
                            overflowY: "auto",
                            padding: "16px 8px 0 0",
                            background:
                              "linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)",
                            borderRadius: "8px",
                            border: "1px solid #f1f5f9",
                          }}
                          className="smooth-scroll-container"
                        >
                          {columns.map((column, index) => (
                            <div
                              key={column.id}
                              className="column-card animate-fade-in"
                              style={{
                                marginBottom:
                                  index === columns.length - 1 ? "0px" : "20px",
                                padding: "24px",
                                border: "1px solid #e2e8f0",
                                borderRadius: "16px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.08)",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "20px",
                                  paddingBottom: "12px",
                                  borderBottom: "1px solid #f1f5f9",
                                }}
                              >
                                <h3
                                  style={{
                                    margin: 0,
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    color: "#1e293b",
                                    background:
                                      "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                  }}
                                >
                                  Column {index + 1}
                                </h3>
                                {columns.length > 1 && (
                                  <button
                                    onClick={() => removeColumn(column.id)}
                                    style={{
                                      background:
                                        "linear-gradient(135deg, #fee2e2, #fef2f2)",
                                      border: "1px solid #fecaca",
                                      color: "#dc2626",
                                      cursor: "pointer",
                                      padding: "8px",
                                      borderRadius: "8px",
                                      transition: "all 0.2s ease",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background =
                                        "linear-gradient(135deg, #fecaca, #fee2e2)";
                                      e.currentTarget.style.transform =
                                        "scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background =
                                        "linear-gradient(135deg, #fee2e2, #fef2f2)";
                                      e.currentTarget.style.transform =
                                        "scale(1)";
                                    }}
                                  >
                                    <X size={16} />
                                  </button>
                                )}
                              </div>
                              <ColumnConfigForm
                                initialConfig={{
                                  label: column.label,
                                  columnName: column.columnName,
                                  columnType: column.columnType,
                                  filterable: column.filterable,
                                  hidden: column.hidden,
                                  searchable: column.searchable,
                                  filterValues: column.filterValues,
                                }}
                                columnTypes={columnTypes}
                                onConfigChange={(config) =>
                                  updateColumn(column.id, config)
                                }
                                isEdit={false}
                                columnId={column.id}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Content>

              {/* Footer */}
              <Footer>
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft size={16} />
                  Back
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
                  >
                    Next
                    <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={triggerRegistrationStepperModal}
                    disabled={!isStep2Valid}
                  >
                    Create Table
                    <Check size={16} />
                  </Button>
                )}
              </Footer>
            </>
          )}
        </ModalContainer>
      </Overlay>
    </>
  );
}
