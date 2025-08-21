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
const srGetRegistrationData = async (payload: RegistrationStepperModalRequest): Promise<LoginResp> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        respMessage: "Registration successful!",
        businesses: [{ id: 1, name: payload.businessName }]
      });
    }, 1000);
  });
};

// Mock business store functions - replace with actual store imports
const useBusinessStore = () => ({
  setSelectedBusiness: (business: any) => console.log("Selected business:", business),
  setBusinesses: (businesses: any[]) => console.log("Set businesses:", businesses),
});

// Mock router - replace with actual router import
const useRouter = () => ({
  push: (path: string) => {
    console.log("Navigate to:", path);
    // In a real app, this would navigate to the home page
  }
});

interface OrganizationData {
  organizationName: string;
  organizationId: string;
  tablePrefix: string;
}

export default function RegistrationStepperModal() {
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
    value: string
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
      columns.map((col) => (col.id === id ? { ...col, ...updates } : col))
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
          router.push('/home');
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
    columns.every((col) => col.label && col.label.trim() !== '' && col.columnType && col.columnType.trim() !== '');

  return (
    <Overlay>
      <ModalContainer>
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
                          <StepDescription>{step.description}</StepDescription>
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
                              e.target.value
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
                              e.target.value
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
                              e.target.value
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
                      {/* Fixed Add Column Button */}
                      <div style={{
                        position: "sticky",
                        top: 0,
                        right: 0,
                        zIndex: 10,
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "16px",
                        backgroundColor: "white",
                        paddingBottom: "8px",
                        borderBottom: "1px solid #e5e7eb"
                      }}>
                        <Button variant="secondary" onClick={addColumn}>
                          <Plus size={16} />
                          Add Column
                        </Button>
                      </div>

                      {/* Scrollable Columns Container */}
                      <div style={{ maxHeight: "400px", overflowY: "auto", paddingRight: "8px" }}>
                        {columns.map((column, index) => (
                          <div key={column.id} style={{ marginBottom: "24px", padding: "20px", border: "1px solid #e5e7eb", borderRadius: "12px", backgroundColor: "#f9fafb" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#374151" }}>
                                Column {index + 1}
                              </h3>
                              {columns.length > 1 && (
                                <button
                                  onClick={() => removeColumn(column.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "#ef4444",
                                    cursor: "pointer",
                                    padding: "4px",
                                    borderRadius: "4px"
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
                              onConfigChange={(config) => updateColumn(column.id, config)}
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
  );
}
